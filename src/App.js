import React, { Component } from 'react'
import Covid from './pages/Covid'
import cls from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={cls.container}>
        <Covid />
      </div>
    )
  }
}
