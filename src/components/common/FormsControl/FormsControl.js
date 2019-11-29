import React from "react";
import style from "./FormsControl.module.scss";

export const Textarea = ({
                           input,
                           label,
                           type,
                           meta: {touched, error}
                         }) => {

  const hasError = touched && error;

  return <div>
    <textarea className={hasError ? style.errorTextarea : ""} {...input} placeholder={label}/>
    {hasError && <span className={style.errorSpan}>{error}</span>}
  </div>
};

export const Input = ({
                        input,
                        label,
                        type,
                        meta: {touched, error}
                      }) => {

  const hasError = touched && error;

  return <div>
    <input type={type} className={hasError ? style.errorTextarea : ""} {...input} placeholder={label}/>
    {hasError && <span className={style.errorSpan}>{error}</span>}
  </div>
};
