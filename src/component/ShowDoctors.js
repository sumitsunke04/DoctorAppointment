import { useEffect, useState } from "react";
import ShowDoctorCard from "./ShowDoctorCard";
import axios from "axios";
import './ShowDoctors.css'
const ShowDoctors = () => {
    

    const [doctors, setDoctors] = useState([]);
    const url = "http://127.0.0.1:8080/user/doctors";
    useEffect(()=>{
        axios.get(url).then((response)=>((response.data))).then((data)=>(setDoctors(data)))
            
    },[])
    
    
    return (
        <div className="avail-doctors "style={{marginTop:"20vh"}}>
            <div className="avail-doctors-heading">
                <h2 className="actual-heading">Available Doctors </h2>
            </div>
            <div className="row row-cols-1 g-4 g-sm-3">
                {
                    <>
                        {
                            doctors.map((i) => {
                                return (
                                    <div className="col px-5">
                                        <ShowDoctorCard key={i.id} doctorId = {i._id} name={i.name} speciality={i.Specialist} location={i.email} />
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