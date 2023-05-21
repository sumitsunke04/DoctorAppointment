
import Modal from "./Modal";
const ShowDoctorCard = ({ doctorId, name, speciality, location }) => {
    console.log(doctorId)

    return (
        <>
            <div className="card shadow" >
                <div
                    className="card-body p-2 px-3"
                >
                    <div className="row row-cols-2 row-cols-sm-4 g-4 align-items-center">
                        <div className="col text-start text-sm-center">
                            <p className="card-text" style={{ fontWeight: "bold" }}>{name}</p>
                        </div>
                        <div className="col text-end text-sm-center">
                            <p className="card-text">{speciality}</p>
                        </div>
                        <div className="col text-start text-sm-center">
                            <p className="card-text">{location}</p>
                        </div>
                        <div className="col text-end text-sm-center">
                            <div className="btn btn-primary subscribe" data-toggle="modal" data-target="#exampleModal">Book</div>
                            <div>
                                <Modal doctorId = {doctorId}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default ShowDoctorCard;