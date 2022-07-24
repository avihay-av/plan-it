import React, {useEffect, useState} from 'react';
import Createplan from '../../modals/CreatePlan'
import Card from './Card';
import "./CardList.css"

const CardList = () => {
    const [modal, setModal] = useState(false);
    const [planList, setplanList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("planList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setplanList(obj)
        }
    }, [])


    const deleteplan = (index) => {
        let tempList = planList
        tempList.splice(index, 1)
        localStorage.setItem("planList", JSON.stringify(tempList))
        setplanList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = planList
        tempList[index] = obj
        localStorage.setItem("planList", JSON.stringify(tempList))
        setplanList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveplan = (planObj) => {
        let tempList = planList
        tempList.push(planObj)
        localStorage.setItem("planList", JSON.stringify(tempList))
        setplanList(planList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>ENTER NEW EVENT</h3>
                <button 
                    className="btn btn-primary mt-2" 
                    onClick = {() => setModal(true)} >
                        Create plan
                </button>
            </div>
            <div className="plan-container">
                {
                planList && planList.map((obj , index) => 
                    <Card planObj={obj} 
                    index={index} 
                    key={index}
                    deleteplan={deleteplan} 
                    updateListArray={updateListArray}/>)
                }
            </div>
            <Createplan toggle={toggle} modal={modal} save={saveplan}/>
        </>
    );
};

export default CardList;