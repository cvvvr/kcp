import './style/Answer.css'
import Progress from "./Progress";
export default function Answer(){
  return (
    <div className='answer'>
      <Progress pCount = {2}>

      </Progress>
      <div className='question'>
        <div className='questionTest'>

        </div>
        <div className='options'>

        </div>
      </div>
    </div>
  )
}