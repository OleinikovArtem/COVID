import React, { useState, useEffect } from 'react'

import { fetchDailyData } from '../../api/covidAPI'
import { Line, Pie } from 'react-chartjs-2'

import cls from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchAPI()
  }, [])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ data }) => data),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infeted',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            fill: true,
          }
        ],
      }}
    />
  ) : null

  const barChart = confirmed ? (
    <Pie
      data={{
        labels: ['Infeted', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(0,0,255, 0.5)', 'rgba(0,255,0, 0.5)', 'rgba(255,0,0, 0.5)'],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      option={{
        legends: { dislay: false },
        title: { dispaly: true, text: `Current state in ${country}` },
      }}
    />
  ) : null

  return <div className={cls.container}>{country && country !== 'global' ? barChart : lineChart}</div>
}

export default Chart