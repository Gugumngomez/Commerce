import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Stepper, Step, StepLabel } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import Shipping from './Shipping';
import checkCss from './checkout.module.css';
import Payment from './Payment';

const initialValues = {
    billingAddress: {
        firstName: '',
        lastName: '',
        country: '',
        street1: '',
        street2: '',
        suburb: '',
        province: '',
        postCode: '',
    },
    shippingAddress: {
        isSameAddress: true,
        firstName: '',
        lastName: '',
        country: '',
        street1: '',
        street2: '',
        suburb: '',
        province: '',
        postCode: '',
    },
    email: '',
    phoneNumber: '',
}

const checkoutSchema = [
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required('required'),
            lastName: yup.string().required('required'),
            country: yup.string().required('required'),
            street1: yup.string().required('required'),
            street2: yup.string(),
            suburb: yup.string().required('required'),
            province: yup.string().required('required'),
            postCode: yup.string().required('required'),
        }),
        shippingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            lastName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            country: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            street1: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            street2: yup.string(),
            suburb: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            province: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
            postCode: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required('required'),
            }),
        }),
    }),
    yup.object().shape({
        email: yup.string().required('required'),
        phoneNumber: yup.string().required('required'),
    })
]

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (values, actions) => {
        setActiveStep(activeStep + 1);

        if (isFirstStep && values.shippingAddress.isSameAddress) {
            actions.setFieldValue('shippingAddress', {
                ...values.billingAddress,
                isSameAddress: true,
            })
        }

        if (isSecondStep) {
            makePayment(values);
        };

        actions.setTouched({});

    };

    async function makePayment(values) { }

    return (
        <div className={checkCss.checkoutContainer}>
            <Stepper activeStep={activeStep} sx={{ m: '20px 0' }}>
                <Step>
                    <StepLabel>Billing</StepLabel>
                </Step>
                <Step>Payment</Step>
            </Stepper>
            <div>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema[activeStep]}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {isFirstStep && (
                                <Shipping
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                />
                            )}
                            {isSecondStep && (
                                <Payment
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                />
                            )}
                            <div className={checkCss.btnContainer}>
                                {!isFirstStep && (
                                    <button
                                        onClick={() => setActiveStep(activeStep - 1)}
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                >
                                    {!isSecondStep ? "Next" : "Place Order"}
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Checkout