import './userInfo.css'
import {useEffect , useState} from "react";
import {Image, Progress} from "antd";
import RankImageHelper from "../../RankImageHelper";
export default function RankInfo(){
  const [grade,setGrade] = useState(99);
  const [rank] = useState('zongshi');


  useEffect(() => {
    setGrade(88);
  },[])

  return (
    <div className='rankInfo'>
      <div className='rankRank'>
        <Image className='rankIcon' preview={false} src={ RankImageHelper.get(rank).image }/>
        <span className='rankText'>{ RankImageHelper.get(rank).name }</span>
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
