import React, {useState} from 'react';
import Editplan from '../../modals/EditPlan'
import "./Card.css"
const Card = ({planObj, index, deleteplan, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateplan = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteplan(index)
    }

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{backgroundColor: colors[index%5].primaryColor}}></div>
            <div className="plan-holder">
                <span 
                    className="card-header" 
                    style={{backgroundColor: colors[index%5].secondaryColor}}>
                        {planObj.Name}
                </span>
                <p className="mt-3">
                    {planObj.Description}
                </p>
                <div className='card-edit-delete-container'>
                    <i className="far fa-edit mr-3 edit-icon" 
                        style={{"color" : colors[index%5].primaryColor}} 
                        onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt delete-icon" 
                        style = {{"color" : colors[index%5].primaryColor}} 
                        onClick={handleDelete}></i>
                </div>
        </div>
        <Editplan 
            modal={modal} 
            toggle={toggle} 
            updateplan={updateplan} 
            planObj={planObj}/>
        </div>
    );
};

export default Card;