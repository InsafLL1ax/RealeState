import React, { useRef, useState } from 'react';
import './regPage.css';

export const RegPage = () => {
    const [ErorrEmail, setErrorEmail] = useState(false);
    const regRef = useRef();

    const onValidateRegInput = () => {
        const RegValue = regRef.current.value;
        // eslint-disable-next-line
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if (!RegValue.match(mailformat)) {
          setErrorEmail(true);
        } else {
          setErrorEmail(false);
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
                                    className={`regPage__content__form__inputs__phone`}
                                    type="text"
                                    placeholder='Phone Number'
                                />
                            </div>

                            <div style={{ display: "grid" }}>
                                <input
                                    className={`regPage__content__form__inputs__email ${ErorrEmail ? "inputError" : ""}`}
                                    type="email"
                                    placeholder='Simple@mail.ru'
                                    ref={regRef}
                                    onBlur={onValidateRegInput}
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