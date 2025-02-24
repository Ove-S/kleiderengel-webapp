import { useState } from "react";
import formOptions from "../../formOptions.json";

export default function ClothingSelects({itemList, setItemList}) {

    const [clothingItem, setClothingItem] = useState({
        amount: "",
        mode: "",
        type: "",
        size: ""
    });

    const [showError, setShowError] = useState(false);

    const changeClothingItem = (e) => {
        const {name, value} = e.target;
        setClothingItem(values => ({...values, [name]: value}));
    }

    const addClothingItem = (e) => {
        setShowError(true);

        if(clothingItem.amount !== "" && clothingItem.mode !== "" && clothingItem.type !== "" && clothingItem.size !== "") {
            const newItemList = [...itemList];
            newItemList.push(clothingItem);
            setItemList(newItemList);
        }
    }

    const createNumbers = () => {
        const numbers = [];
        for(let i = 1; i <= 10; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    return(
        <div className="card">
            <div className="row">
                <div className="col-12">
                    <h5>Bitte wählen Sie alle Kleidungsstücke entsprechend aus und fügen Sie diese zur Liste hinzu.</h5>
                </div>
                <div className="col-md-6">
                    <label>Menge:</label>
                    <select name="amount" className="form-select" value={clothingItem.amount} onChange={changeClothingItem}>
                        <option disabled hidden value="">Menge wählen</option>
                        {createNumbers().map((number, index) => {
                            return(<option key={index} value={number}>{number}</option>)
                        })}
                    </select>
                    {clothingItem.amount === "" && showError ?
                        <span className="clothing-span">Es muss eine Menge angegeben werden!</span>
                    :
                        <></>
                    } 
                </div>
                <div className="col-md-6">
                    <label>Mode:</label>
                    <select name="mode" className="form-select" value={clothingItem.mode} onChange={changeClothingItem}>
                        <option disabled hidden value="">Mode wählen</option>
                        {formOptions.clothingMode.map((mode, index) => {
                            return(<option key={index} value={mode.option}>{mode.option}</option>)
                        })}
                    </select>
                    {clothingItem.mode === "" && showError ?
                        <span className="clothing-span">Es muss eine Mode angegeben werden!</span>
                    :
                        <></>
                    }
                </div>
                <div className="col-md-6">
                    <label>Typ</label>
                    <select name="type" className="form-select" value={clothingItem.type} onChange={changeClothingItem}>
                        <option disabled hidden value="">Typ wählen</option>
                        {formOptions.clothingType.map((type, index) => {
                            return(<option key={index} value={type.option}>{type.option}</option>)
                        })}
                    </select>
                    {clothingItem.type === "" && showError ?
                        <span className="clothing-span">Es muss ein Typ angegeben werden!</span>
                    :
                        <></>
                    }
                </div>
                <div className="col-md-6">
                    <label>Größe</label>
                    <select name="size" className="form-select" value={clothingItem.size} onChange={changeClothingItem}>
                        <option disabled hidden value="">Größe wählen</option>,
                        {formOptions.clothingSize.map((size, index) => {
                            return(<option key={index} value={size.option}>{size.option}</option>)
                        })}
                    </select>
                    {clothingItem.size === "" && showError ?
                        <span className="clothing-span">Es muss eine Größe angegeben werden!</span>
                    :
                        <></>
                    }
                </div>  
                <div className="col-12">
                    <button type="button" className="btn" id="add-btn" onClick={addClothingItem}>Kleidungsstück hinzufügen</button>
                </div>
            </div>
        </div>
    );
}