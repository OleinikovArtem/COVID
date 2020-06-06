import React , { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import cls from './CounterPicker.module.css'
import { fetchCountries } from '../../api/covidAPI'
// import PropTypes from 'prop-types'

const CounterPicker = ({ handleCountryChange }) => {
    const [country, setFetchCountries] = useState([])

    useEffect(()=> {
       const fetchAPI = async () => setFetchCountries( await fetchCountries() )

       fetchAPI()
    }, [setFetchCountries])

    return (
        <div>
            <FormControl className={cls.formControl}> 
                <NativeSelect defaultValue='' 
                    onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value='global'>All World</option>
                    { country.length ? (
                        country.map((country, i ) => <option value={country} key={i}>{country}</option>)
                    ) : null
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}

// CounterPicker.propTypes = {

// }

export default CounterPicker

