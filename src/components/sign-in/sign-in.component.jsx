import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firbase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async e =>{
        e.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    handleChange = e =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div className="sign-in">
                <h1>Already have an account?</h1>
                <span>Sign-in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name="email" type="email" value={this.state.email} label="email" required/>
                    <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label="password" required/>
                   <div className="buttons">
                   <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignIn