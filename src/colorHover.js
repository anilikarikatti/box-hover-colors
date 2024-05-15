import React from 'react'
import "./colorStyles.css"
export default function ColorHover() {

    let arr = [];

    const colors = ["red","black","blue","green" , "yellow"]
    let count = 0; 
        for(let j = 0 ;j <100 ; j++){
            count++;
            let color = Math.floor(Math.random()*100) % colors.length;

            console.log(color)
            arr.push({count , color:colors[color]})
        }

    console.log(arr, "arr");
  return (
    <div className='container'>
        {arr.map(elem=>{
            return (
                <div className='box' onMouseEnter={(e)=>e.target.style.background = elem.color}  onMouseOut={(e)=>setTimeout((e)=>( e.target.style.background = "", e.target.style.transition = "2s ease-in") , 1700 , e)}></div>
            )
        })}
    </div>

  )
}
