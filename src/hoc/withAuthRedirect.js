import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = Component => {

  const mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuth
  });

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;

      return <Component {...this.props} />
    }
  }

  const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectAuthRedirectComponent;
};
