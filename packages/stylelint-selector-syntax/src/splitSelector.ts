import _ from 'lodash';

/* import types */
import {
  Selector,
  PyramidSelector,
  SelectorPart,
  PyramidSelectorPart,
  BemStructure,
  SelectorBlockType,
} from './selectors';

import { Options } from './defaultConfig';

function getPatternPositionArray(string: string, pattern: string): number[] {
  let pos = null;
  const arr = [];

  while (pos !== -1) {
    pos = string.indexOf(pattern, pos + 1);

    if (pos !== -1) {
      arr.push(pos);
    }
  }

  return arr;
}

function matchBlockType(options: Options, prefix: string): SelectorBlockType {
  return options.blockTypes.find((blockType) => {
    if (typeof blockType.prefix === 'string') {
      return blockType.prefix === prefix;
    }

    if (_.isArray(blockType.prefix)) {
      return blockType.prefix.includes(prefix);
    }
  });
}

function stringSplitterIndexs(...args: number[]): number[] {
  return [].concat(...args).sort((a, b) => a - b);
}

function splitBem(string: string, options: Options): BemStructure {
  const delimitersToSplit = [];
  const arr = [];

  Object.keys(options.bemEntitiesDelimiters).forEach((key) => {
    delimitersToSplit.push(
      getPatternPositionArray(string, options.bemEntitiesDelimiters[key]),
    );
  });

  const splitter = stringSplitterIndexs(...delimitersToSplit, 0, string.length);

  splitter.forEach((stringIndex, i) => {
    const part = string.substring(stringIndex, splitter[i + 1]);
    let partFound = false;

    Object.keys(options.bemEntitiesDelimiters).forEach((key) => {
      if (part.startsWith(options.bemEntitiesDelimiters[key])) {
        arr.push({
          partType: key,
          string: part.replace(options.bemEntitiesDelimiters[key], ''),
        });

        partFound = true;
      }
    });

    if (part && !partFound) {
      arr.push({ partType: 'block', string: part });
    }
  });

  return arr;
}

const extractPrefix = (selector: string, options: Options): string | null => {
  let result = null;

  options.blockTypes.forEach((type) => {
    if (typeof type.prefix === 'string' && selector.startsWith(type.prefix)) {
      result = type.prefix;
    }

    if (Array.isArray(type.prefix)) {
      type.prefix.forEach((typePrefix) => {
        if (selector.startsWith(typePrefix)) {
          result = typePrefix;
        }
      });
    }
  });

  return result;
};

const splitSelector = (
  selector: Selector,
  options: Options,
): PyramidSelector => {
  let prefix = null;

  const pyramidSelector = selector.map((part: SelectorPart) => {
    const newPart: PyramidSelectorPart = { ...part };

    if (part.type === 'class') {
      prefix = extractPrefix(newPart.value, options);
      newPart.blockIdentifier = splitBem(newPart.value, options)[0].string;
      newPart.blockType = matchBlockType(options, prefix) || {
        name: 'unknown',
      };
      newPart.bemStructure = splitBem(
        newPart.value.replace(prefix, ''),
        options,
      );

      if (prefix && newPart.bemStructure) {
        newPart.bemStructure.push({ partType: 'prefix', string: prefix });
      }
    }

    return newPart;
  });

  return pyramidSelector;
};

export default splitSelector;
