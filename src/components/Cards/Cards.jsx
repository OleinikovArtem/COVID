import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import cls from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
	if(!confirmed) {
		return 'Loading...'
	}

	return (
		<div className={cls.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(cls.card , cls.infected)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Infected </Typography>
						<Typography variant='h5'gutterBottom>
							<CountUp start={0} end={confirmed.value} duration={2.5}	separator=','/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of active infected of COVID-19
						</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(cls.card , cls.recovered)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Recovery</Typography>
						<Typography	variant='h5' gutterBottom>
							<CountUp start={0} end={recovered.value} duration={2.5}	separator=','/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				
				<Grid item component={Card} xs={12} md={3} className={cx(cls.card , cls.deaths)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Deaths </Typography>
						<Typography variant='h5' gutterBottom >
							<CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography
							variant='body2'>
							Number of deaths caused by  COVID-19
						</Typography>
					</CardContent>
				</Grid>
				
			</Grid>
		</div>
	)
}

Cards.propTypes = {
    data: PropTypes.object
}

export default Cards

