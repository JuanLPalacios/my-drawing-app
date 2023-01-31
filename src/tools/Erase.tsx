import { useCallback, useEffect, useState } from "react";
import { createCanvasPair } from "../generator/createCanvasPair";

export const Erase = ({layerPair, bufferPair, children}:ToolProps) => {
    const [isMouseDown, setMouseDown] = useState(false);
    const {width, height} = layerPair.canvas;
    const [dataTemp, setDataTemp] = useState<ImageData | undefined>();
    
    useEffect(() => {
        layerPair.ctx.globalCompositeOperation = 'destination-out';
        return()=>{
            layerPair.ctx.globalCompositeOperation = 'source-over';
        }
    }, [bufferPair]);

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setDataTemp(layerPair.ctx.getImageData(0,0,width,height));
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
          ctx.stroke();
          layerPair.ctx.drawImage(bufferPair.canvas, 0, 0);
          ctx.clearRect(0, 0, width, height);
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