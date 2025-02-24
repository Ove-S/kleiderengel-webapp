import { useState } from "react";
import SelectService from "./form-components/SelectService";
import AdressInput from "./form-components/AdressInput";
import ClothingSelects from "./form-components/ClothingSelects.jsx";
import ClothingList from "./form-components/ClothingList";
import SelectCrisisArea from "./form-components/SelectCrisisArea";
import FormConfirmation from "./form-components/FormConfirmation";

const emptyValues = {
    service: "",
    streetName: "",
    streetNumber: "",
    plz: "",
    city: "",
    crisisArea: ""
}

export default function Form() {

    const [values, setValues] = useState(emptyValues);
    const [itemList, setItemList] = useState([]);
    const [plzWarning, setPlzWarning] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [timestamp, setTimestamp] = useState("");
    const [showListError, setShowListError] = useState(false);

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});

        if(e.target.name === "service" && e.target.value === "") {
            setPlzWarning(false);
        }
    }    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimestamp(new Date().toLocaleString());
        setShowListError(true);
        if(!plzWarning && itemList.length > 0) {
            console.log(values);
            console.log(itemList);                
            setFormSubmitted(true);
        }
    }

    const handleResetForm = (e) => {
        e.preventDefault();
        setValues(emptyValues);
        setItemList([]);
        setFormSubmitted(false);
        setShowListError(false);
    }

    if(!formSubmitted) {
        return (
            <form onSubmit={handleSubmit}>
                <h3>Formular zur Registrierung einer Kleiderspende</h3>
                <SelectService values={values} onChange={onChange}/>
                {!values.service ? <></> : 
                    <AdressInput values={values} plzWarning={plzWarning} setPlzWarning={setPlzWarning} onChange={onChange}/>
                }
                <ClothingSelects itemList={itemList} setItemList={setItemList}/>
                <ClothingList itemList={itemList} setItemList={setItemList}/>
                <SelectCrisisArea onChange={onChange}/>
                {!plzWarning ? <></> :
                    <span className="plzWarning mx-4">Achtung! Die Abholung von dieser Adresse ist leider nicht möglich, da diese sich nicht in der näheren Umgebung befindet. Der Abholservice gilt nur für Adressen deren PLZ mit den Ziffern "23" beginnt. Wenn Sie dennoch eine Keiderspende abgeben möchten, kommen Sie bitte persönlich bei uns vorbei.</span>
                }
                {itemList.length === 0 && showListError ?
                    <span className="empty-list-span">Um das Formular zu senden, darf die Liste der Kleidungssücke nicht leer sein!<br/>Bitte fügen Sie mindestens ein Kleidungsstück hinzu.</span>
                :
                    <></>
                }
                <button type="submit" className="btn btn-primary">Senden</button>
            </form>
        );
    } else {
        return(
            <>
                <h3>Registrierung erfolgreich abgeschlossen!</h3>
                <form onSubmit={handleResetForm}>
                    <FormConfirmation values={values} itemList={itemList} timestamp={timestamp}/>
                    <button type="submit" className="btn btn-primary">Neues Formular</button>
                </form>
            </>
        );
    }
}