import organisationData from "../../organisationData.json";

export default function FormConfirmation({values, itemList, timestamp}) {
    return(
        <>
            <h3>Ihre Kleiderspende:</h3>

            {!values.service ?
                <div className="card">
                    <h5>Die Kleiderspende wurde persönlich an der Geschäftsstelle abgegeben.</h5>
                </div>
            :
                <div className="card">
                    <h5>Es wurde der Abholservice gewählt.</h5>
                    <label><b>Wichtig: </b>Die Kleiderspende wird am nächsten Abholtermin von der angegebenen Adresse abgeholt. </label>
                    <label><b>Hinweis: </b>Sie müssen nicht zwingend anwesend sein. Platzieren Sie die Spende einfach in einem Beutel gut sichtbar vor ihrer Tür.</label>
                </div>
            }

            {!values.service ? <></> :
                <div className="card">
                    <div className="row">
                        <h5>Zur Abholung wurde folgende Adresse angegeben:</h5>
                        <div className="col-md-6">
                            <label>Straße:</label>
                            <input type="text" className="form-control" value={values.streetName} readOnly/>
                        </div>
                        <div className="col-md-6">
                            <label>Nr:</label>
                            <input type="text" className="form-control" value={values.streetNumber} readOnly/>
                        </div>
                        <div className="col-md-6">
                            <label>PLZ:</label>
                            <input type="text" className="form-control" value={values.plz} readOnly/>
                        </div>
                        <div className="col-md-6">
                            <label>Stadt:</label>
                            <input type="text" className="form-control" value={values.city} readOnly/>
                        </div>
                    </div>
                </div>
            }

            <div className="card">
                <h5>Folgende Kleidungsstücke wurden registriert:</h5>
                <table className="table-responsive">     
                    <thead>
                        <tr>
                            <td><b>Menge:</b></td>
                            <td><b>Mode:</b></td>
                            <td><b>Typ:</b></td>
                            <td><b>Größe:</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, index) => {
                            return(
                                <tr key={index}>
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
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="card">
                <h5>Ihre Kleiderspende wird in das folgende Kriesengebiet verschickt:</h5>
                <input type="text" className="form-control" value={values.crisisArea} readOnly/>
            </div>

            {!values.service ? 
                <div>
                    <label>{timestamp}, {organisationData.city}<hr/>Datum, Zeit, Ort</label>
                </div>
            :
                <div>
                    <label>{timestamp}, {values.city}<hr/>Datum, Zeit, Ort</label>
                </div>
            }

        </>
    );
}