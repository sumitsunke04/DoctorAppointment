import React, { useState } from 'react';
import './Modal.css';
import axios from 'axios';
import { param } from 'jquery';

const Modal = ({ doctorId }) => {
    console.log(doctorId, "/////")
    const [date, setDate] = useState(null);
    const id1 = doctorId;

    const [appointmentTime, setAppointmentTime] = useState("")
    const handleDateChange = (e) => {
        setDate(e.target.value);
        // console.log(e.target.value);
    }

    // console.log(`user/bookapp/?doctorId=${doctorId}`)

    const bookAppointment = (e) => {
        console.log(id1);
        const axiosConfig = {
            params: {
                doctorId,
                date
            }
        }


        axios.get(`user/bookapp`,
            axiosConfig
        ).then((res) => {



            const resp = window.confirm(`expected time  ${res.data.hour}:${res.data.min} ${(res.data.hour > 12) ? 'pm' : 'am'} , Do you want to confirm appoinment.`)

            if (resp) {

                axios.post("/user/confirm", {
                    data: {
                        result: resp,
                        hour: res.data.hour,
                        min: res.data.min
                    }

                }, {
                    params: {
                        doctorId,
                        date
                    }
                })
                    .then((resp) => {
                        console.log(resp);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }

        }

        )





    }

    return (
        <div className="modal fade" id={`exampleModal${doctorId}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >

            <div className="modal-dialog align-item-center" role="document">

                <div className="ipoModal modal-content">
                    {/* modal header */}
                    <div className="modal-header mt-3 border-0">

                        <div type="button" className="modalclosebtn close m-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </div>
                    </div>

                    {/* modal body */}
                    <div className="modal-body justify-content-center">
                        <h4>Select Date</h4>
                        <br />
                        <input type="date" name="" id="" onChange={handleDateChange} />
                        <br /><br />
                        <button type="submit" className='btn btn-primary subscribe' onClick={bookAppointment}>Check Appointment</button>

                        <p>{appointmentTime}</p>
                    </div>



                    {/* modal footer */}
                    <div className="modal-footer border-0 align-items-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;