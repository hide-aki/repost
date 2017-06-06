import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'
import Entrance from '../components/Entrance'

class SignUp extends Component {
  onSubmit(values) {
    const { email, password } = values
    this.props.createUser(email, password)
  }

  render() {
    return (
      <Entrance
        title="Sign Up"
        onSubmit={this.onSubmit.bind(this)}
        linkUrl="/sign_in"
        linkText="Sign in as existing user" />
    )
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)