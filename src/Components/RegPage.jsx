import React, { useRef, useState } from 'react';
import './regPage.css';

export const RegPage = () => {
    const [ErorrEmail, setErrorEmail] = useState(false);
    const [ErorrPhone, setErrorPhone] = useState(false);
    const phoneRef = useRef();
    const regRef = useRef();
   


    const onValidateEmailInput = () => {
        const RegValue = regRef.current.value;
        // eslint-disable-next-line
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!RegValue.match(mailformat)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }

    const onValidatePhoneInput = () => {
        const PhonedValue = phoneRef.current.value;

        const phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!PhonedValue.match(phoneformat)) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }
    }

    const sendMessageToTelegram = (firstName, lastName, phone, email) => {
        const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}`;
        fetch('http://localhost:3001/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Здесь можно обработать ответ от сервера
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    
const handleClickNext = () => {
    const firstName = document.querySelector('.regPage__content__form__inputs__firstName').value;
    const lastName = document.querySelector('.regPage__content__form__inputs__lastName').value;
    const phone = document.querySelector('.regPage__content__form__inputs__phone').value;
    const email = document.querySelector('.regPage__content__form__inputs__email').value;

    sendMessageToTelegram(firstName, lastName, phone, email);
};

    return (
        <div className="regPage" >
            <div className="regPage__wrapper" >
                <div className="regPage__content__form__head" >
                    <h3 className='regPage__title' > GET YOUR CASH OFFER TODAY </h3>
                    <h4 className='regpage__title__comment'>( I call back immediately = respect clients )</h4>
                    <div className='regPage__content__form'>
                        <div className='regPage__content__form__inputs'>
                            <div style={{ display: "grid" }}>
                                <input
                                    className={`regPage__content__form__inputs__firstName`}
                                    type="string"
                                    placeholder='First Name'
                                />
                            </div>
                            <div style={{ display: "grid" }}>
                                <input
                                    className={`regPage__content__form__inputs__lastName`}
                                    type="string"
                                    placeholder='Last Name'
                                />
                            </div>
                            <div style={{ display: "grid" }}>
                                <input
                                    /* pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"*/
                                    className={`regPage__content__form__inputs__phone ${ErorrPhone ? "inputError" : ""}`}
                                    type="text"
                                    placeholder='Phone Number'
                                    ref={phoneRef}
                                    onBlur={onValidatePhoneInput}
                                />
                                {ErorrPhone && <span style={{ color: "red", fontSize: "12px", paddingLeft: "70px" }}>incorrect phone number</span>}
                            </div>

                            <div style={{ display: "grid" }}>
                                <input
                                    className={`regPage__content__form__inputs__email ${ErorrEmail ? "inputError" : ""}`}
                                    type="email"
                                    placeholder='Email Address'
                                    ref={regRef}
                                    onBlur={onValidateEmailInput}
                                />
                                {ErorrEmail && <span style={{ margin: 0, color: "red", fontSize: "12px", paddingLeft: "90px" }}>incorrect email</span>}
                            </div>
                        </div>
                    </div>
                    <div className='regPage__content__form__inputs__button' onClick={handleClickNext}>NEXT</div>
                </div>
            </div>
        </div>
    )
}