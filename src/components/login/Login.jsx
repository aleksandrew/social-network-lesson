import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.scss';

const LoginForm = props => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field type={"text"} placeholder={"Login"} name={"login"} component={"input"}/>
    </div>
    <div>
      <Field placeholder={"Password"} name={"password"} component={"input"}/>
    </div>
    <div>
      <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
      remember me
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
};

const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm);

const Login = props => {

  const onSubmit = formData => {
    console.log(formData)
  };

  return <fieldset>
    <legend>Login</legend>
    <LoginRedaxForm onSubmit={onSubmit}/>
  </fieldset>
};

export default Login;
