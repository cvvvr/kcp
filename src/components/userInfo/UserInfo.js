import './userInfo.css'
import {useEffect} from "react";
import AbilityChart from "./AbilityChart"
import RankInfo from "./RankInfo";
export default function UserInfo() {
  const intor = '吧啦啦啦啦啦啦吧啦啦啦啦啦啦吧啦啦啦啦啦啦吧吧啦啦啦啦啦啦吧啦啦啦啦啦啦吧啦啦啦啦啦啦吧啦啦啦啦啦啦吧啦啦啦啦啦啦啦啦啦啦啦啦吧啦啦啦啦啦啦';
  useEffect(() => {

  }, [])

  return (
    <div className='userInfoPage'>
      <span className='userTitle'>我的资料</span>
      <div className='content'>
        <div className='userBaseInfo'>
          <div className='infoText'>
            <span>名称：我叫邓楚恬</span>
          </div>
          <div className='infoText'>
            <span>邮箱：992049024@qq.com</span>
          </div>
          <div className='infoText'>
            <span>电话：19967109952</span>
          </div>
          <div className='infoTextIn'>
            <span>个人介绍：</span>
            <div>
              <p>{`${intor}`}</p>
            </div>
          </div>
        </div>
        <div className='ability'>
          <RankInfo/>
          <AbilityChart/>
        </div>
      </div>
    </div>
  )
}

