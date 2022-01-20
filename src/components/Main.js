import './Main.css'
import Option from "./Option";
import {useEffect} from "react";

export default function Main(props) {
  useEffect(() => {
    console.log(props);
  })

  return (
    <div className='main_body'>
      <Option/>
      <div className='main_main'>
        {props.children}
      </div>
    </div>
  )
}

