import { useCallback, useState } from 'react';
import { Layer } from './components/Layer';

const createCanvasPair = (width: number, heidgh: number) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = heidgh;
  let ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('CanvasRenderingContext2D could not be accessed');
  return { canvas, ctx }
}

const App = () => {
  const width = 600, heidgh = 600;
  const [layerPair] = useState(createCanvasPair(width, heidgh));
  const [bufferPair] = useState(createCanvasPair(width, heidgh));
  const [isMouseDown, setMouseDown] = useState(false);
  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { ctx } = bufferPair;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    setMouseDown(true);
  }, []),
    onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isMouseDown) {
        const { ctx } = bufferPair;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.clearRect(0, 0, width, heidgh);
        ctx.stroke();
      }
    }, [isMouseDown]),
    onMouseUp = useCallback(() => {
      layerPair.ctx.drawImage(bufferPair.canvas, 0, 0);
      bufferPair.ctx.clearRect(0, 0, width, heidgh);
      setMouseDown(false);
    }, []);
  return <div onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} >
    <Layer canvas={layerPair.canvas} buffer={bufferPair.canvas} />
  </div>;
}

export default App;
