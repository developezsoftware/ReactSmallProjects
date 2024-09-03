import DropDown from "../components/DropDown";
import { useState } from "react";

function DropDownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (selected) => {
        setSelection(selected);
    }

    const options = [
        {label : "Red", value : "red"},
        {label : "Green", value : "green"},
        {label : "Blue", value : "blue"}
    ];

    return (
        <div>
            <DropDown 
                options={options} 
                selection={selection} 
                onSelect={handleSelection} 
            />
        </div>
    );
} 

export default DropDownPage;