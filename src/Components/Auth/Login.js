import React from 'react'
import {login} from '../../Redux/Reducers/userReducer'
import {connect} from 'react-redux'
import {redirect, Link} from 'react-router-dom'
 
function Login(props) {
    const {username, setUsername} = React.useState("")
    const {password, setPassword} = React.useState("")

    function loginUser(){

    }

    function handleKeyDown(e){
        if (e.keyCode === 13) {
            loginUser()
        }
    }

    let {user} = props
    
    return (
        <div>
            
        </div>
    )
}

function mapStateToProps(state){
    return state.user
}

export default connect(
    mapStateToProps,
    { login }
)(Login)
