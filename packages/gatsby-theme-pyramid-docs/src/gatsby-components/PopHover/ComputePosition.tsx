interface Position {
  right: number;
  top: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

export const computePosition = (
  pos: Position,
  windowHeight: number,
  windowWidth: number,
) => ({
  top: {
    global: {
      bottom: windowHeight - pos.bottom,
      left: pos.right - pos.width / 2,
      paddingBottom: pos.height,
      transform: 'translateX(-50%)',
    },
    ghost: {
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: pos.width + 30,
      height: pos.height + 20,
    },
  },
  right: {
    global: {
      top: pos.bottom - pos.height / 2,
      transform: 'translateY(-50%)',
      left: pos.left,
      paddingLeft: pos.width,
    },
    ghost: {
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: pos.width + 30,
      height: pos.height + 20,
    },
  },
  left: {
    global: {
      top: pos.bottom - pos.height / 2,
      transform: 'translateY(-50%)',
      right: windowWidth - pos.right,
      paddingRight: pos.width,
    },
    ghost: {
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      width: pos.width + 30,
      height: pos.height + 20,
    },
  },
  bottom: {
    global: {
      top: pos.top,
      left: pos.left + pos.width / 2,
      paddingTop: pos.height,
      transform: 'translateX(-50%)',
    },
    ghost: {
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      width: pos.width + 20,
      height: pos.height + 40,
    },
  },
});

type side = 'top' | 'left' | 'right' | 'bottom';

export const defineBestSide = (
  pos: Position,
  windowHeight: number,
  windowWidth: number,
): side => {
  const realEstate = {
    top: pos.top,
    left: pos.left,
    bottom: windowHeight - pos.bottom,
    right: windowWidth - pos.right,
  };

  const bestSide: side = ['top', 'right', 'left', 'bottom'].reduce(
    (current: side, next: side): side =>
      realEstate[current] > realEstate[next] ? current : next,
  );

  return bestSide;
};
