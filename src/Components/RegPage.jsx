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


    return (
        <div className="regPage__wrapper">
            <div className="regPage__content__form__head">
                <h3 className='regPage__title' > GET YOUR CASH OFFER TODAY </h3>
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
                <div className='regPage__content__form__inputs__button'>NEXT</div>
            </div>

        </div>
    )
}