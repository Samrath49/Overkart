import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {

    const history = useHistory();
    const style = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinshed, setIsFinshed] = useState(false);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                history.pushState('/');
            }
        }
        generateToken();
    }, [cart, history]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const timeout = () => {
        setTimeout(() => {
            setIsFinshed(true);
        }, 4321);
    }

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout} />

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase </Typography>
                <Divider className={style.divider} />
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" >Back to home</Button>
        </>
    ) : isFinshed ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase 🔥</Typography>
                <Divider className={style.divider} />
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" >Back to home</Button>
        </>
    ) : (
        <div className={style.spinner}>
            <CircularProgress />
        </div >
    );

    if (error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" vairant="outlined" type="button">Back to Home</Button>
        </>
    }

    return (
        <>
            <CssBaseline />
            <div className={style.toolbar} />
            <main className={style.layout}>
                <Paper className={style.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={style.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}
// }

export default Checkout
