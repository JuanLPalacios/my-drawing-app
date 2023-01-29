import { useCallback, useContext, useState } from 'react';
import { Layer } from './components/Layer';
import { Menu } from './components/Menu';
import { MenuContext } from './contexts/MenuContext';
import { Draw } from './tools/Draw';

const createCanvasPair = (width: number, heidgh: number) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = heidgh;
  let ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('CanvasRenderingContext2D could not be accessed');
  return { canvas, ctx }
}

const App = () => {
  const width = 600, height = 600;
  const [menuOptions] = useContext(MenuContext);
  const [layerPair] = useState(createCanvasPair(width, height));
  const [bufferPair] = useState(createCanvasPair(width, height));
  const {selectedTool, tools} = menuOptions;
  const {Tool} = tools[selectedTool];
  return <>
  <Tool bufferPair={bufferPair} layerPair={layerPair}>
    <Layer canvas={layerPair.canvas} buffer={bufferPair.canvas} />
  </Tool>
  <Menu />
  </>
}

export default App;
