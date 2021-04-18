import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '../Button/Button';


const About = () => {
    const [currentString, setCurrentstring] = useState(false);
    const userDetails = useSelector((state) => state.name);
    const dispathDetails = useDispatch();

    const clickChangeHandler = () => {
        dispathDetails(
            {
                type: "USER_DETAILS"
            }
        );
        setCurrentstring(true);
    }
    //const stringValue = currentString ? "My name is Amit Kumar" : "i am 25 years old";


    return (
        <div>
            <p>{currentString ? userDetails : "Click Now"}</p>
            <Button click={clickChangeHandler} />
        </div>
    )
}
export default About;