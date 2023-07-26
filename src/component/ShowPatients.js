import { useEffect, useState } from "react";
import ShowPatientCard from "./ShowPatientCard.js";
import axios from "axios";
import './ShowPatients.css'
const ShowPatients = () => {
    
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
            console.log(resp.data);
            setarr(resp.data);
        })
        
    }


    return (
        <div className="all-apts "style={{marginTop:"20vh"}}>
            <div className="all-apts-heading">
                <h2>Check Appointments </h2>
                <input type="date" name="" id="" onChange={handleDateChange} />
                <br /><br />
                <button type="submit" className='btn btn-primary subscribe' onClick={getAppointment}>Check Appointment</button>
            </div>
            <div className="row row-cols-1 g-4 g-sm-3 mt-4">
                {
                    <>
                        {
                            arr.map((i) => {
                                return (
                                    <div className="col px-5">
                                        <ShowPatientCard key={i._id} Symptoms={i.Symptoms}userId={i.userName} location={"pune"} hour={i.time.hour} min={i.time.min}/>
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