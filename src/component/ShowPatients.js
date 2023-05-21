import { useEffect, useState } from "react";
import ShowPatientCard from "./ShowPatientCard.js";
import axios from "axios";
const ShowPatients = () => {
    // const arr = [
    //     {
    //         id: 1,
    //         name: "sumit",
    //         age: 20,
    //         Gender: "male",
    //         location: "kolhapur"
    //     },
    //     {
    //         id: 2,
    //         name: "maheshwar",
    //         age: 20,
    //         Gender: "male",
    //         location: "sangli"
    //     },
    //     {
    //         id: 3,
    //         name: "hrishi",
    //         age: 30,
    //         Gender: "male",
    //         location: "satara"
    //     }
    // ]
    const [arr,setarr] = useState([]);
    const [date, setDate] = useState(null);
    
    const handleDateChange = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
    }
    const getAppointment=()=>{
        const axiosConfig = {
            params: {
                       date
            }      
          }
        axios.get('admin/appoinments',
            axiosConfig
        )
        .then((resp)=>{
            console.log(resp);
            setarr(resp.data);
        })
    }


    return (
        <div className="all-apts">
            <div className="all-apts-heading">
                <h2>Todays Appointments are</h2>
                <input type="date" name="" id="" onChange={handleDateChange} />
                <button type="submit" className='mt-5' onClick={getAppointment}>Check Appointment</button>
            </div>
            <div className="row row-cols-1 g-4 g-sm-3">
                {
                    <>
                        {
                            arr.map((i) => {
                                return (
                                    <div className="col">
                                        <ShowPatientCard key={i._id} name={i.name} age={10} location={"pune"} gender={"male"} />
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