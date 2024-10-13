import React, { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Payment = () => {
    useEffect(() => {
        // Load PayPal SDK
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID`;
        script.async = true;
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: '100.00' } }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                    });
                }
            }).render('#paypal-button');
        };
        document.body.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return (
        <div>
            <h1>Payments Dashboard</h1>
            <h3>QR Code for Order: <span id="orderID">HJDXM5362VJHD2C</span></h3>
            <QRCodeSVG value="HJDXM5362VJHD2C" />
            <div id="paypal-button"></div>
            {/* Other components and sections */}
        </div>
    );
};

export default Payment;
