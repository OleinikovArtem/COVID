import axios from 'axios'

const url = 'http://covid19.mathdro.id/api'

export const fetchDate = async (country) => {
  let changeableUrl = url

  if (country && country !== 'global') {
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl)
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.error(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      data: reportDate,
    }))

    return modifiedData
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
  } catch (error) {
    console.error(error)
  }
}
