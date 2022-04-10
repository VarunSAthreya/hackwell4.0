import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export const loadScript = async () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
};
export const showRazorpay = async ({ amount, window, teamData }) => {
    await loadScript();

    try {
        if ((window as any).Razorpay) {
            const { data } = await axios.post('/api/razorpay', {
                price: amount,
            });

            let options = {
                key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
                amount: data.amount,
                currency: data.currency,
                name: 'JSS Hackwell',
                description: `JSS Hackwell Registration Fee`,
                image: 'https://jssateb.ac.in/assets/images/logo/jssate.png',
                order_id: data.id,
                handler: async (response) => {
                    const onSuccess = await axios.post('/api/validate', {
                        order_id: data.id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                    });

                    const isVerified = onSuccess.data.value;
                    console.log(isVerified);

                    if (isVerified) {
                        // const paymentResult = {
                        //     payment_id: response.razorpay_payment_id,
                        //     order_id: response.razorpay_order_id,
                        //     update_time: Date.now(),
                        //     status: 'paid',
                        // };
                        teamData.payment_id = response.razorpay_payment_id;
                        teamData.order_id = response.razorpay_order_id;
                        teamData.paid = true;
                        const docRef = await addDoc(
                            collection(db, 'registered_teams'),
                            teamData
                        );
                        console.log('Document written with ID: ', docRef.id);
                        alert('Payment Successful');
                        // TODO: Update the order status in backend
                    } else {
                        console.log('Payment not verified!');
                    }
                },
                handlePaymentSuccess(response) {},
                theme: {
                    color: '#0E93A4',
                },
            };

            let rzp1 = new (window as any).Razorpay(options);
            rzp1.open();
        }
    } catch (error) {
        console.log(error.message);
    }
};