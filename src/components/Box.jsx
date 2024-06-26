import React, {useState} from "react";
import "../styles/box.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

export default function(){
    const[count,setCount] = useState(1);

    const handleClick = (e, num)=>{
    setCount(count+1);
    if(count%2==0){
        e.target.innerHTML = `<img style={height:"20px"} src="${circle}" alt="Circle">`;

    }
    else
    e.target.innerHTML = `<img src="${cross}" alt="Cross">`; 
    }

    // const[isCross, setIsCross]= useState(false);
    // const[icon,setIcon]=useState("hhihk ");
    // const[isClicked, setIsClicked]=useState(false)
   

    return(
        <div className="box" onClick={(e)=> {handleClick(e,1)}}>
            <img styles={{height:"0px", width:"0px"}} src={circle}/>
        </div>
      
    )
}