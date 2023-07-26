const ShowPatientCard = ({ id, Symptoms, userId, location, hour,min }) => {
    return (
        <div className="card shadow" style={{height:"70px"}}>
            <div
                className="card-body p-2 px-3 mt-2"
            >
                <div className="row row-cols-2 row-cols-sm-4 g-4 align-items-center">
                    <div className="col text-start text-sm-center">
                        <p className="card-text" style={{ fontWeight: "bold" }}>{Symptoms}</p>
                    </div>
                    <div className="col text-end text-sm-center">
                        <p className="card-text">{userId}</p>
                    </div>
                    <div className="col text-start text-sm-center">
                        <p className="card-text">{hour}:{min}</p>
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