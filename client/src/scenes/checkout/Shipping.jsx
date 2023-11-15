import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import shippingCss from './checkout.module.css'
import AddressForm from './AddressForm'

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {
    return (
        <div className={shippingCss.shipContainer}>
            <div className={shippingCss.billContainer}>
                <h1>Billing Information</h1>
                <AddressForm
                    type='billingAddress'
                    value={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            </div>
            <div className={shippingCss.checkBox}>
                <FormControlLabel
                    label='Same for Shipping Address'
                    control={
                        <Checkbox
                            defaultChecked
                            value={values.shippingAddress.isSameAddress}
                            onChange={() =>
                                setFieldValue(
                                    'shippingAddress.isSameAddress',
                                    !values.shippingAddress.isSameAddress
                                )
                            }
                        />
                    }
                />
            </div>

            {/* shipping form */}
            {!values.shippingAddress.isSameAddress && (
                <div>
                    <h1>Shipping Information</h1>
                    <AddressForm
                        type='shippingAddress'
                        value={values.shippingAddress}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                    />
                </div>

            )}

        </div>
    );
};

export default Shipping