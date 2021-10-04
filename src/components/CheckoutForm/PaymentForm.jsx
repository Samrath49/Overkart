import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// import Review from './Review';


const PaymentForm = () => {
    return (
        <>
            {/* <Review checkoutToken={checkoutToken} /> */}
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>{({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement />
                        <br /><br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={backStep}>Back</Button>
                            <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                            </Button>
                        </div>
                    </form>
                )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
