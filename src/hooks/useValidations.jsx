import React from "react";
const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function Form() {
    const [emailField, setEmailField] = React.useState({
        value: "",
        hasError: false,
    });


    function handleBlur(evt) {
    const hasError = !emailRegexp.test(emailField.value);
    setEmailField((prevState) => ({ ...prevState, hasError}));
    }
}