const ShowPatientCard = ({ id, name, age, location, gender }) => {
    return (
        <div className="card shadow" >
            <div
                className="card-body p-2 px-3"
            >
                <div className="row row-cols-2 row-cols-sm-4 g-4 align-items-center">
                    <div className="col text-start text-sm-center">
                        <p className="card-text" style={{ fontWeight: "bold" }}>{name}</p>
                    </div>
                    <div className="col text-end text-sm-center">
                        <p className="card-text">{age}</p>
                    </div>
                    <div className="col text-start text-sm-center">
                        <p className="card-text">{gender}</p>
                    </div>
                    <div className="col text-end text-sm-center">
                        <p className="card-text">{location}</p>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShowPatientCard;