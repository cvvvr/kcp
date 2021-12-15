import './style/Phone.css'
import Answer from "./Answer";
import {useEffect} from "react";
import axios from "axios";

export default function Phone() {
  const biu = () => {
    axios({
      url: 'http://localhost:3002',
    }).then(res => {
      console.log(res);
    }).catch(err => {
        console.log(err);
      }
    )
  }

  useEffect(() => {
    biu();
  }, [])

  return (
    <div className='Phone'>
      <Answer></Answer>
    </div>
  )
}

