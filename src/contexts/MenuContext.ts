import { createContext } from 'react';

export type Tool = (props:{ 
  children?: JSX.Element|JSX.Element[];
}) => JSX.Element;


export type ToolOptions = {
    tools:{
      name:string,
      Tool:Tool
    }[],
    selectedTool:number
};

export const MenuContext = createContext<[ToolOptions, (state:ToolOptions)=>void]>([
    {
        selectedTool: 0,
        tools: []
    },
    ()=>undefined]
);