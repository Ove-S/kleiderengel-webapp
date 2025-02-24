import { useState } from "react";
import formOptions from "../../formOptions.json";

export default function SelectCrisisArea({onChange}) {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    }

    return(
        <div className="card">
            <h5 className="col-12">Wählen Sie eine Krisenregion aus, in die Ihre Spende geschickt werden soll.</h5>
            <select name="crisisArea" className="form-select" required={true} defaultValue="" onChange={onChange} onBlur={handleFocus} focused={focused.toString()}>
                <option disabled hidden value="">Krisenregion wählen</option>
                {formOptions.crisisAreas.map((area, index) => {
                    return(<option key={index} value={area.option}>{area.option}</option>)
                })}
            </select>
            <span>Krisenregion auswählen oder auf beliebig setzen!</span>
        </div>
    );
}