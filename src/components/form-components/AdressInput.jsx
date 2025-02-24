import { useState } from "react";
import organisationData from "../../organisationData.json";

const regExpMaxFiveDigits = /^\d{0,5}$/;
const regExpIsFiveDigits = /^\d{5}$/;

export default function AdressInput({values, plzWarning, setPlzWarning, onChange}) {

    const [focused, setFocused] = useState({
        streetName: false,
        streetNumber: false,
        plz: false,
        city: false
    });

    const checkPlz = (plz) => {
        const value1 = organisationData.plz.toString().slice(0,2);
        const value2 = plz.toString().slice(0,2);

        if(value1 === value2) {
            return(true);
        } else {
            return(false)
        }
    }

    const handleChangePlz = (e) => {
        
        if(e.target.value.match(regExpMaxFiveDigits)) {
            onChange(e);
            setPlzWarning(false);
        }
        if(e.target.value.match(regExpIsFiveDigits) && !checkPlz(e.target.value)) {
            setPlzWarning(true);
        }
        
    }

    const handleFocus = (e) => {
        setFocused({...focused, [e.target.name]: true});
    }

    return(
        <div className="card">
            <div className="row">
                <div>
                    <h5>Bitte geben Sie eine Abholadresse an.</h5>
                </div>
                <div className="col-md-6">
                    <label className="label">Straße:</label>
                    <input
                        type="text"
                        name="streetName"
                        className="form-control"
                        placeholder="Straße"
                        value={values.streetName}
                        required={true}
                        onChange={onChange}
                        onBlur={handleFocus}
                        focused={focused.streetName.toString()}
                    />
                    <span>Es muss ein Straßennamen angegeben werden!</span>
                </div>
                <div className="col-md-6">
                    <label>Nr.:</label>
                    <input
                        type="text"
                        name="streetNumber"
                        className="form-control"
                        placeholder="Nr."
                        value={values.streetNumber}
                        required={true}
                        onChange={onChange}
                        onBlur={handleFocus}
                        focused={focused.streetNumber.toString()}
                    />
                    <span>Es muss eine Hausnummer angegeben werden!</span>
                </div>
                <div className="col-md-6">
                    <label>PLZ:</label>
                    <input
                        type="text"
                        name="plz"
                        className="form-control"
                        placeholder="PLZ"
                        required={true}
                        value={values.plz}
                        pattern="[0-9]{5}$"
                        onChange={handleChangePlz}
                        onBlur={handleFocus}
                        focused={focused.plz.toString()}
                    />
                    <span>Es muss eine Postleitzahl angegeben werden!</span>   
                </div>
                <div className="col-md-6">
                    <label>Stadt:</label>
                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Stadt"
                        value={values.city}
                        required={true}
                        onChange={onChange}
                        onBlur={handleFocus}
                        focused={focused.city.toString()}
                    />
                    <span>Es muss eine Stadt angegeben werden!</span>
                </div>
                {!plzWarning ? <></> :
                    <span className="plzWarning">Achtung! Die Abholung von dieser Adresse ist leider nicht möglich, da diese sich nicht in der näheren Umgebung befindet. Der Abholservice gilt nur für Adressen deren PLZ mit den Ziffern "{organisationData.plz.toString().slice(0,2)}" beginnt. Wenn Sie dennoch eine Keiderspende abgeben möchten, kommen Sie bitte persönlich bei uns vorbei.</span>
                }
            </div>
        </div>
    );
}