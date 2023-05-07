import ShowPatientCard from "./ShowPatientCard.js";
const ShowPatients = () => {
    const arr = [
        {
            id: 1,
            name: "sumit",
            age: 20,
            Gender: "male",
            location: "kolhapur"
        },
        {
            id: 2,
            name: "maheshwar",
            age: 20,
            Gender: "male",
            location: "sangli"
        },
        {
            id: 3,
            name: "hrishi",
            age: 30,
            Gender: "male",
            location: "satara"
        }
    ]
    return (
        <div className="all-apts">
            <div className="all-apts-heading">
                <h2>Todays Appointments are</h2>
            </div>
            <div className="row row-cols-1 g-4 g-sm-3">
                {
                    <>
                        {
                            arr.map((i) => {
                                return (
                                    <div className="col">
                                        <ShowPatientCard key={i.id} name={i.name} age={i.age} location={i.location} gender={i.Gender} />
                                    </div>)
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default ShowPatients;