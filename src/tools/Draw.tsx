import { useCallback, useState } from "react";

export const Draw = ({layerPair, bufferPair, children}:ToolProps) => {
    const [isMouseDown, setMouseDown] = useState(false);
    const {width, height} = layerPair.canvas;
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
          ctx.clearRect(0, 0, width, height);
          ctx.stroke();
        }
      }, [isMouseDown]),
      onMouseUp = useCallback(() => {
        layerPair.ctx.drawImage(bufferPair.canvas, 0, 0);
        bufferPair.ctx.clearRect(0, 0, width, height);
        setMouseDown(false);
      }, []);
    return <div onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} >
      {children}
    </div>;
  }