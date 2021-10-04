import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';
const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const style = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    return (
        <>
            <div className={style.toolbar} />
            <main className={style.layout}>
                <Paper className={style.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={style.stepper}>
                        {steps.map((step) => {
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        })}
                    </Stepper>
                </Paper>
            </main>
        </>
    )
}

export default Checkout
