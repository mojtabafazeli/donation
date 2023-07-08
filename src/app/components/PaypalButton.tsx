import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const PaypalButton = ({ currency, amount}: {currency:string, amount: string}) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, []);


    return (<>
            { (isPending) && <div className="spinner" /> }
        <PayPalButtons
                disabled={false}
                forceReRender={[amount, currency]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            console.log(orderId)
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions?.order?.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

export default  PaypalButton;