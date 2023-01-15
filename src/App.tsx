import { useState } from 'react';
import {Layer} from './components/Layer';

const createCanvasPair = (width: number, heidgh: number) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = heidgh;
  let ctx = canvas.getContext('2d');
  if(!ctx) throw new Error('CanvasRenderingContext2D could not be accessed');
  return {canvas, ctx}
}

const App = () => {
    const width = 600, heidgh = 600;
    const [layerPair] = useState(createCanvasPair(width, heidgh));
    const [bufferPair] = useState(createCanvasPair(width, heidgh));
    return <Layer canvas={layerPair.canvas} buffer={bufferPair.canvas} />
}

export default App;
