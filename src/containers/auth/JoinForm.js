import React, {useState, setState, useEffect} from "react";
import { handleJoin } from "../../api/auth/AuthApi";


const JoinForm = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        checkPassword: '',
    })

    const {username, password, checkPassword} = inputs;

    const onChangeJoin = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const onResetJoin = () => {
        setInputs({
            username: '',
            password: '',
            checkPassword: '',
        })
    }
    const onSubmitJoin = e => {
        e.preventDefault();
        if(password !== checkPassword) {

            return;
        }

        handleJoin({
            username: e.target.username.value,
            password: e.target.password.value,
        })
    }

}

export default JoinForm;