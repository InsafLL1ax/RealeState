import React, { useRef, useState } from 'react';
import './regPage.css';

export const RegPage = () => {
    const [ErorrEmail, setErrorEmail] = useState(false);
    const [ErorrPhone, setErrorPhone] = useState(false);
    const [messageSent, setMessageSent] = useState(false); // Состояние для отслеживания отправки сообщения
    const [errorMessage, setErrorMessage] = useState(false); // Состояние для хранения текста ошибки
    const phoneRef = useRef();
    const regRef = useRef();

    const onValidateEmailInput = () => {
        const RegValue = regRef.current.value;
        // eslint-disable-next-line
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setErrorEmail(!RegValue.match(mailformat));
    };

    const onValidatePhoneInput = () => {
        const PhonedValue = phoneRef.current.value;
        const phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        setErrorPhone(!PhonedValue.match(phoneformat));
    };

    const sendMessageToTelegram = (firstName, lastName, phone, email) => {
        setErrorMessage(false); // Обнуление предыдущего сообщения об ошибке
        setMessageSent(false); // Обнуление предыдущего сообщения об успешной отправке
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
                if (!data.success) {
                    setErrorMessage(true);
                } else {
                    setMessageSent(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setErrorMessage(true);
            });
    };

    const handleClickNext = () => {
       
        if (!ErorrEmail && !ErorrPhone) {
            const firstName = document.querySelector('.regPage__content__form__inputs__firstName').value;
            const lastName = document.querySelector('.regPage__content__form__inputs__lastName').value;
            const phone = document.querySelector('.regPage__content__form__inputs__phone').value;
            const email = document.querySelector('.regPage__content__form__inputs__email').value;

            if (!firstName || !lastName || !phone || !email) {
                alert('Please fill in all fields.');
                return; // Если хотя бы одно поле пустое, выходим из функции, кнопка не нажимается
            }
            sendMessageToTelegram(firstName, lastName, phone, email);
        } else {
            console.log('Please correct errors before proceeding.');

        }
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
                        {errorMessage && <div className="error-message">Error. Please try again later</div>}
                        {messageSent && <div className="message-sent">Message sent successfully!</div>}
                    </div>
                    <div className={`regPage__content__form__inputs__button ${ErorrEmail || ErorrPhone ? "disabled" : ""}`}
                        onClick={handleClickNext}>NEXT</div>
                </div>
            </div>
        </div>
    )
};
