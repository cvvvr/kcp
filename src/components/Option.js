import './Main.css'
import avatar from '../static/Avatar1.png'
import {useEffect} from "react";
import {Avatar, Image , Button} from 'antd';
import {hashHistory} from "react-router";

export default function Option() {
  useEffect(() => {

  }, [])

  return (
    <div className='main_option'>
      <div className='userInfo' onClick={() => {hashHistory.push('/userInfo')}}>
        <div className='touX'>
          <Avatar shape="square" src={<Image src={ avatar } preview={false}/>} className='avatar' />
        </div>
         <div className='info'>
            <span className='name'>我叫程瑞</span>
            <span className='rank'>不屈王者</span>
         </div>
      </div>
      <Button className='optionItem' onClick={() => {hashHistory.push('/game')}}> 去答题 </Button>
      <Button className='optionItem' > 个人中心 </Button>
      <Button className='optionItem' > 去答题 </Button>
      <Button className='optionItem' > 去答题 </Button>
      <Button className='optionItem' > 去答题 </Button>
    </div>
  )
}   

