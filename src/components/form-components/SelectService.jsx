export default function SelectService({values, onChange}) {
    return(
        <div className="card">
            <h5 className="col-12">
                Wählen Sie aus, ob es sich um eine Abgabe an der Geschäftsstelle handelt, 
                oder ob Sie unseren Abholservice nutzen möchten.
            </h5>
            <select name="service" className="form-select" value={values.service} onChange={onChange}>
                <option value="">Übergabe an der Geschäftsstelle</option>
                <option value="pickupService">Abholservice nutzen</option>
            </select>
        </div>
    );
}