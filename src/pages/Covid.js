import React, { Component } from 'react'

// components
import Cards from '../components/Cards/Cards'
import Chart from '../components/Chart/Chart'
import CounterPicker from '../components/CounterPicker/CounterPicker'

//styles 
import { fetchDate } from '../api/covidAPI'
 
import covid from './image.png';


export default class Covid extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchData = await fetchDate()

        this.setState({data: fetchData})
    }

    handleCountryChange = async ( country ) => {
        const fetchData = await fetchDate(country)
        this.setState({ data: fetchData , country: country})
        console.log(country)
    }

    render() {
        const { data, country } = this.state
        const styleContainer = {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'}
        return (
            <div style={styleContainer}>
                {/* <h1><a href='https://youtu.be/khJlrj3Y6Ls?t=3857' target='blank'> Vidos</a></h1> */}
                <img src={covid} alt="Covid"/>
                <Cards data={data}/>
                <CounterPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
