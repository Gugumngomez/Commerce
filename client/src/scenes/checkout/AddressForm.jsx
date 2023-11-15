import React from 'react'
import { getIn } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TextField } from '@mui/material';
// import addCss from './checkout.module.css'

const AddressForm = ({
    type,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
}) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    if (!values) {
        return null
    }

    // these functions allow for better code readability
    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) =>
        Boolean(
            getIn(touched, formattedName(field)) &&
            getIn(errors, formattedName(field))
        );

    const formattedHelper = (field) =>
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));


    return (
        <div
            style={{
                display: "grid",
                gap: "15px",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
        >
            <TextField
                fullWidth
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName("firstName"))}
                name={formattedName("firstName")}
                error={formattedError("firstName")}
                helperText={formattedHelper("firstName")}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName("lastName"))}
                name={formattedName("lastName")}
                error={formattedError("lastName")}
                helperText={formattedHelper("lastName")}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('country'))}
                name={formattedName("country")}
                error={formattedError("country")}
                helperText={formattedHelper("country")}
                sx={{ gridColumn: "span 4" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Street Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('street1'))}
                name={formattedName("street1")}
                error={formattedError("street1")}
                helperText={formattedHelper("street1")}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Street Address 2 (optional)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('street2'))}
                name={formattedName("street2")}
                error={formattedError("street2")}
                helperText={formattedHelper("street2")}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Suburb"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('suburb'))}
                name={formattedName("suburb")}
                error={formattedError("suburb")}
                helperText={formattedHelper("suburb")}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Province"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('province'))}
                name={formattedName("province")}
                error={formattedError("province")}
                helperText={formattedHelper("province")}
                sx={{ gridColumn: "1fr" }}
            />
            <TextField
                fullWidth
                type="text"
                label="Postal Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={getIn(values, formattedName('postalCode'))}
                name={formattedName("postalCode")}
                error={formattedError("postalCode")}
                helperText={formattedHelper("postalCode")}
                sx={{ gridColumn: "1fr" }}
            />
        </div>
    )
}

export default AddressForm