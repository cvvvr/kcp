import './userInfo.css'
import {useEffect , useState} from "react";
import {Image, Progress} from "antd";
import wangzheIcon from '../../static/rank/wangzhe.png'
export default function RankInfo(){
  const [grade,setGrade] = useState(99);
  useEffect(() => {
    setGrade(88);
  },[])

  return (
    <div className='rankInfo'>
      <div className='rankRank'>
        <Image className='rankIcon' preview={false} src={ wangzheIcon }/>
        <span className='rankText'>最强王者</span>
      </div>
      <div className='rankGrade'>
        <Progress
          type="dashboard"
          strokeColor={{
            '0%': '#021244',
            '100%': '#7894f1',
          }}
          percent={90}
          format={(val) => {
            return `${grade}级`
          }}
          strokeLinecap='square'
          strokeWidth={12}
          width={180}
        />
      </div>
    </div>
  )
}
