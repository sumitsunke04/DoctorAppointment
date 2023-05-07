import React, { useState } from 'react';

const Modal = () => {

    const [date, setDate] = useState(null);
    const handleDateChange = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

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
                        <input type="date" name="" id="" onChange={handleDateChange} />
                        <br />
                        <button type="submit">Check Appointment</button>
                    </div>

                    {/* modal footer */}
                    <div className="modal-footer border-0 align-items-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal