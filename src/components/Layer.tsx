import '../css/Layer.css';
import { Canvas } from './Canvas';

export interface LayerProps {
    canvas: HTMLCanvasElement
    buffer: HTMLCanvasElement
}

export const Layer = (props: LayerProps) => {
    const { canvas, buffer } = props;
    // mount canvas in the container
    return <div className="Layer" >
        <Canvas canvas={canvas} />
        <Canvas canvas={buffer} />
    </div>;
}