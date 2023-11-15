import React from 'react'
import TextField from "@mui/material/TextField";
import payCss from './checkout.module.css'

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    return (
        <div className={payCss.payContainer}>
            <div className={payCss.payment}>
                <h1>Contact Info</h1>
                <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4", marginBottom: "15px" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    name="phoneNumber"
                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    sx={{ gridColumn: "span 4" }}
                />
            </div>
        </div>
    )
}

export default Payment