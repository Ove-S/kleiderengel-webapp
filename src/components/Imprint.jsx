import organisationData from "../organisationData.json";

export default function Imprint() {
    return(
        <div className="card">
            <div className="container col-lg-6">
                <ul className="list-group">
                    <li className="list-group-item"><b>Verantwortlich für die Inhalte:</b></li>
                    <li className="list-group-item">{organisationData.name}</li>
                    <li className="list-group-item">{organisationData.street} {organisationData.streetNumber}</li>
                    <li className="list-group-item">{organisationData.plz} {organisationData.city}</li>
                    <li className="list-group-item"><br></br><b>Sie erreichen uns:</b></li>
                    <li className="list-group-item"><b>E-mail:</b> {organisationData.email}</li>
                    <li className="list-group-item"><b>Tel:</b> {organisationData.tel}</li>
                </ul>
            </div>
        </div>
    );
}