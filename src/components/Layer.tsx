import { useEffect, useRef } from "react";

export interface LayerProps {
    canvas: HTMLCanvasElement
}

export const Layer = (props: LayerProps) => {
    const { canvas } = props;
    const ref = useRef<HTMLDivElement>(null);
    // mount canvas in the container
    useEffect(() => {
        if (canvas && ref.current) {
            ref.current.appendChild(canvas);
        }
    }, [canvas, ref.current]);
    return <div {...props} ref={ref} ></div>
}