import './userInfo.css'
import ReactECharts from 'echarts-for-react';
import {useEffect} from "react";

export default function AbilityChart() {
  const option = {
    title: {
      text: '答题战力图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['个人', '全服平均'],
      left: 'right'
    },
    radar: {
      indicator: [
        { name: '答题速度', max: 6500 },
        { name: '答题正确率', max: 16000 },
        { name: '知识深度', max: 30000 },
      ],
    },
    textStyle: {
      color: '#000000',
      fontsize: 100
    },
    series: [
      {
        name: '答题战力图',
        type: 'radar',
        tooltip: {
          trigger: 'item',
          z: 1
        },
        data: [
          {
            value: [4200, 3000, 20000, 35000],
            name: '个人',
            areaStyle: {
              color: '#052f4b'
            },
          },
          {
            value: [5000, 14000, 28000, 26000],
            name: '全服平均',
            areaStyle: {
              color: '#d5e8af'
            },
          }
        ],
      }
    ]
  };
  useEffect(() => {

  }, [])

  return (
    <div className='abilityChart'>
      <ReactECharts className='chartItem'  option={option} />
    </div>
  )
}

