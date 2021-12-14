import React from 'react'

import FormInput from './FormInput'
import NormalButton from './NormalButton';
import SubmitButton from './SubmitButton';



class CodeForm extends React.Component {

  constructor(props) {
    super(props);

  }

  message = ""



  state = {
    form: {
      email: '',
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }



      let response = await fetch('http://localhost:8080/recuperation/password/code', config)
      let json = await response.json();

      if (!json.flag == true) {
        alert("code successfully")
      } else {

        alert("code incorrect")
      }

    } catch (error) {

    }
  }





  render() {
    return (
      <div>
        

      </div>
    );
  }
}



export default CodeForm;