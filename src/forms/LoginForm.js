import React from 'react';
import { Form, Button } from "semantic-ui-react";


class LoginForm extends React.Component {
state = {
  data: {},
  loading: false,
  errors: {}
}

render(){
  return(
    <form>
      <button className="primary">Login</button>
    </form>
  );
  }
}


export default LoginForm;
