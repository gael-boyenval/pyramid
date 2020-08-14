import React, { useContext, useState } from 'react';
import PreviewComponent from './PreviewComponent';
import { PreviewContext } from '../../templates/pattern-page';
import './Preview.scss';

const Preview = ({ platform, name, nude = false }) => {
  const [viewport, setViewport] = useState('auto');
  const [availableWidth, setAvailableWidth] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [grid, setGrid] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isNude, setNude] = useState(nude);
  const { edges } = useContext(PreviewContext);

  const relatedNodes = edges.filter(
    (item) => item.node.previewIdentifier === `${platform}.${name}`,
  );

  const codes = {};
  const url = relatedNodes[0].node.iframePath;

  relatedNodes.forEach((element) => {
    codes[element.node.type] = element.node.content;
  });

  return !relatedNodes.length ? (
    <div>NO PREVIEW FOUND WITH THE PARAMETERS</div>
  ) : (
    <PreviewComponent
      toggleOptions={() => setNude(!isNude)}
      viewport={viewport}
      fullScreen={fullScreen}
      toggleFullScreen={() => setFullScreen(!fullScreen)}
      changeViewPort={(v) => setViewport(v)}
      getAvailableWidth={(w) => setAvailableWidth(w)}
      showGrid={() => setGrid(!grid)}
      grid={grid}
      showMore={() => setOpen(!isOpen)}
      open={isOpen}
      codes={codes}
      url={url}
      nude={isNude}
    />
  );
};

export default Preview;
