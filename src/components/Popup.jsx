import React, { useContext, useEffect, useRef } from 'react';
import { formatDate } from '../helper';
import TaskForm from './TaskForm';
import TaskContext from '../context/TaskContext';
import AuthContext from '../auth/AuthContext';

function Popup(props) {
    const { actionType, data } = props;

    const closeBtn = useRef(null);
    const { deleteTask } = useContext(TaskContext);
    const { message, setMessage } = useContext(AuthContext);
    useEffect(() => {
        setMessage("");
    }, [])

    const onDelete = () => {
        deleteTask(data.id)
    }

    return (




        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                {
                    actionType === "view" ?
                        <div>
                            <h5>{data?.title}</h5>
                            <p>{data?.description}</p>
                            <div className="d-flex">
                                <p className='mb-0'>Modification On: {formatDate(data?.modifiedOn)}</p>
                                <p className='mb-0 ms-auto'>Due Date: {formatDate(data?.duedate)}</p>
                            </div>
                        </div>
                        : actionType === "edit" ?
                            <TaskForm isupdate={true} data={data} closeBtn={closeBtn} isPopup={true} />
                            :


                            <div>
                                {message !== "" ?
                                    <p>{message}</p> :
                                    <p>are you sure, you want to delete this task?</p>
                                }
                                <div className="d-flex mt-5">
                                    <button className='btn btn-danger' onClick={onDelete}>yes</button>
                                    <button className='btn btn-warning' data-bs-dismiss="model" >no</button>
                                </div>
                            </div>
                }
            </div>
            </div>

            );
}

            export default Popup;