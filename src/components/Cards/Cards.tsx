import React, { FC } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css'

//@ts-ignore
export const Cards: FC = ({ data: { confirmed, recovered, deaths, lastUpdate, } }) => {
    if (!confirmed) {
        return 'Loading';
    }

    return (
        <>
            <h2>Death rate: <span style={{ textDecoration: 'underline' }}>{parseFloat(deaths.value) / parseFloat(confirmed.value) * 100}</span>%</h2>
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={8} component={Card} className={cx(styles.cards, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={8} component={Card} className={cx(styles.cards, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={8} component={Card} className={cx(styles.cards, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
