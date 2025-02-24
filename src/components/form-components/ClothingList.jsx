    export default function ClothingList({itemList, setItemList}) {

        const deleteClothingItem = (index) => {
            const newItemList = [...itemList];
            newItemList.splice(index, 1);
            setItemList(newItemList);
        }

        return(
            <div className="card">
                <h5>Hinzugefügte Kleidungsstücke:</h5>
                {itemList.length == 0 ? 
                    <label>Es wurde noch kein Kleidungsstück hinzugefügt!</label>
                :   
                    <table className="table-responsive">     
                        <thead>
                            <tr>
                                <th>Menge:</th>
                                <th>Mode:</th>
                                <th>Typ:</th>
                                <th>Größe:</th>
                            </tr>
                        </thead>
                        {itemList.map((item, index) => {
                            return(
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <label>{itemList[index].amount}</label>
                                        </td>
                                        <td>
                                            <label>{itemList[index].mode}</label>
                                        </td>
                                        <td>
                                            <label>{itemList[index].type}</label>
                                        </td>
                                        <td>
                                            <label>{itemList[index].size}</label>
                                        </td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => {deleteClothingItem(index)}}
                                            >Löschen</button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                }  
            </div>
        );
    }