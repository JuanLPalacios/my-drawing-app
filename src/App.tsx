import { Layer } from './components/Layer';
const App = () => {
    const width = 600, heidgh = 600;
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = width;
    canvas.height = heidgh;
    let ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('CanvasRenderingContext2D could not be accessed');
    return <Layer canvas={canvas} />
}

export default App;
