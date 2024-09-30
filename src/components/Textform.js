import React,{useState} from 'react'
import './Textform.css';

export default function Textform(props) {
   
    


    const[text ,seTtext]=useState()
    const handleonclick=()=>{
        seTtext(text.toUpperCase())
    }


    const onchangehandler=(event)=>{
        seTtext(event.target.value)

    }
    const handleonclickk=()=>
    {
        seTtext(text.toLowerCase())
       
    }
  return (
    <>
    
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={onchangehandler} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleonclick}>Primary</button>
<button type="button" className="btn btn-primary" onClick={handleonclickk}>Primary</button>
    </>
  )
}
