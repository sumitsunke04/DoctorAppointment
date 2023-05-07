import ShowDoctorCard from "./ShowDoctorCard";
const ShowDoctors = () => {
    const arr = [
        {
            id: 1,
            name: "pavan",
            speciality: "coder",
            location: "sinnar"
        },
        {
            id: 2,
            name: "samarth",
            speciality: "useless",
            location: "kolhapur"
        },
        {
            id: 3,
            name: "aryan",
            speciality: "electronics",
            location: "nashik"
        }
    ]

    
    return (
        <div className="avail-doctors">
            <div className="avail-doctors-heading">
                <h2>Available Doctors </h2>
            </div>
            <div className="row row-cols-1 g-4 g-sm-3">
                {
                    <>
                        {
                            arr.map((i) => {
                                return (
                                    <div className="col">
                                        <ShowDoctorCard key={i.id} name={i.name} speciality={i.speciality} location={i.location} />
                                    </div>)
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default ShowDoctors;