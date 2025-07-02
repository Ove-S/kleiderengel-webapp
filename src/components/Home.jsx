import { Link } from "react-router"
import organisationData from "../organisationData.json";

export default function Home() {
    return (
        <div className="card">
            <h3>Willkommen auf der Webseite der Kleiderengel!</h3>
            <div className="card">
                <h4>Wir sind:</h4>
                <p>Ein ehrenamtlicher Verein der sich der Logistik und Organisation von Kleiderspenden verschrieben hat.<br/>Sie können bei uns Kleiderspenden abgeben und wir kümmern uns darum, dass die Kleidung in das Krisengebiet Ihrer Wahl geschickt wird.</p>
            </div>
            <div className="card">
                <h4>So können Sie Spenden:</h4>
                <p>Kommen Sie gerne während unserer Öffnungszeiten bei uns vorbei und geben Sie ihre Kleiderspende persönlich ab.<br/>Unsere Adresse finden sie {<Link to="/contact">hier</Link>}.</p>
                <p>Sollten Sie eine Adresse in der Nähe unserer Geschäftsstelle haben, können Sie auch unseren Abholservice nutzen.<br/>Dafür einfach direkt ein {<Link to="/form">Formular</Link>} ausfüllen und die Kleiderspende wird am nächsten Abholtermin bei Ihnen abgeholt.</p>
            </div>
            <div className="card">
                <div className="row">
                    <div className="container col-md-6 my-2">
                        <ul className="list-group">
                            <li className="list-group-item"><b>Unsere Öffungszeiten:</b></li>
                            {organisationData.openingTimes.map((openingTime, index) => {
                                return (
                                    <li key={index} className="list-group-item">{openingTime.name}: {openingTime.time}</li>
                                )
                            })}
                        </ul>
                    </div> 
                    <div className="container col-md-6 my-2">
                        <ul className="list-group">
                            <li className="list-group-item"><b>Unsere Abholtermine:</b></li>
                            {organisationData.pickupDays.map((pickupDay, index) => {
                                return (
                                    <li key={index} className="list-group-item">{pickupDay.day} {pickupDay.month} {pickupDay.year}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};