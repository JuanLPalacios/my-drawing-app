import { useCallback, useContext, useState } from 'react';
import { Layer } from './components/Layer';
import { Menu } from './components/Menu';
import { MenuContext } from './contexts/MenuContext';
import { createCanvasPair } from './generator/createCanvasPair';

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
