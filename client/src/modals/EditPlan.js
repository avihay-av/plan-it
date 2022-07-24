import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const EditplanPopup = ({modal, toggle, updateplan, planObj}) => {

    const [planName, setplanName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e) => {  
        const {name, value} = e.target

        if(name === "planName"){
            setplanName(value)
        }else{
            setDescription(value)
        }
    }

    useEffect(() => {
        setplanName(planObj.Name)
        setDescription(planObj.Description)
    },[planObj.Description, planObj.Name])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = planName
        tempObj['Description'] = description
        updateplan(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update plan</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Plan Title</label>
                        <input type="text" className = "form-control" value = {planName} onChange = {handleChange} name = "planName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>

                    <div class="col-sm-4">
                    <div class="input-group date" id="datepicker">
                        <input type="text" class="form-control"/>
                        <span class="input-group-append">
                            <span class="input-group-text bg-white">
                                <i class="fa fa-calendar"></i>
                            </span>
                        </span>
                    </div>
                </div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditplanPopup;