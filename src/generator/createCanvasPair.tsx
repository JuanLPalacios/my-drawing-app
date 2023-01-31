export const createCanvasPair = (width: number, heidgh: number) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = heidgh;
  let ctx = canvas.getContext('2d');
  if (!ctx)
    throw new Error('CanvasRenderingContext2D could not be accessed');
  return { canvas, ctx };
};
