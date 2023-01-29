import { useState } from "react";
import { Draw } from "../tools/Draw";
import { Erase } from "../tools/Erase";
import { MenuContext, ToolOptions } from "./MenuContext";

export const AppContextProvider = (props:{children?: JSX.Element|JSX.Element[]}) => {
    const useMenuOptions = useState<ToolOptions>({
        tools: [
            { Tool: Draw, name: 'draw',},
            { Tool: Erase, name: 'erase'}
        ],
        selectedTool: 0
    });
    console.log(useMenuOptions);
    
    return <MenuContext.Provider value={useMenuOptions}>
        {props.children}
    </MenuContext.Provider>;
};

