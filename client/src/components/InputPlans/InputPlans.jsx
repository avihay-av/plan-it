import { useState } from "react";
import "./InputPlans.css";
import { Button } from "monday-ui-react-core";

const InputPlans = ({props}) =>{
    const [inputValue,setInputValue] =  useState("");

    const handleInputValue = (event) =>{
        setInputValue(event.targer.value)
    }
    const handleButtonClick = async() =>{
        try {
            if(!inputValue){
                alert("Enter input")
            }
        }catch (error) {
            alert("Error To Render While Button Clicked")
        }
    }

    return (
        <div>
            <div>
                <input 
                    type="text"
                    className=""
                    onChange={handleInputValue}
                    value={inputValue}
                    placeholder ="Enter New Event"
                />
                <Button type="button" onClick = {handleButtonClick}>ADD EVENT</Button>
            </div>
        </div>
    )
 } 

export default InputPlans;