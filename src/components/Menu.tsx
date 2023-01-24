import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

export const Menu = () => {
    const [menuOptions, setMenuOptions] = useContext(MenuContext);
    const { tools, selectedTool } = menuOptions;
    return (
        <div className="Menu">
            {tools.map(({ name }, i) => 
                <button
                    onClick={() => setMenuOptions({...menuOptions, selectedTool:i})}
                    className={`menu-tool ${selectedTool === i ? "selected" : ""}`}
                >
                {name}
                </button>
            )}
        </div>
    );
};