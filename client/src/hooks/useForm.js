// write your custom hook here to control your checkout form
import e from "cors";
import { useState } from "react";

const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = () => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    };
};