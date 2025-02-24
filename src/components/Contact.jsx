import organisationData from "../organisationData.json";

export default function Contact() {

    return(
        <main>
            <div className="card">
                <div className="container col-md-6 my-2">
                    <ul className="list-group">
                        <li className="list-group-item"><b>Kontakt:</b></li>
                        <li className="list-group-item">{organisationData.name}</li>
                        <li className="list-group-item">{organisationData.street} {organisationData.streetNumber}</li>
                        <li className="list-group-item">{organisationData.plz} {organisationData.city}</li>
                        <li className="list-group-item"><br></br><b>Sie erreichen uns unter:</b></li>
                        <li className="list-group-item"><b>E-mail:</b> {organisationData.email}</li>
                        <li className="list-group-item"><b>Tel:</b> {organisationData.tel}</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}