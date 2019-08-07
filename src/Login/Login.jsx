import React, { Component } from 'react';
import './Login.css';
import QuizForm from '../QuizForm/QuizForm';
import { runInThisContext } from 'vm';

export default class Login extends Component {
   
    constructor(props){ 
        super(props);
        this.state = {
            submit: false,
            isHidden: false,
            signup: true
           
        }
       
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderQuiz = this.renderQuiz.bind(this);
        this.renderSignup = this.renderSignup.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        }
    
    onSubmit () {
        this.setState  ({
            login: false,
            signup: false,
            submit: true
        })
    }
    
    onLoginClick () {
        this.setState({
            login: true,
            signup: false
        })
    }
    onSignupClick() {
        this.setState({
            login: false,
            signup: true
        })
    }
    renderQuiz () {
        return(
            
            <QuizForm/>
        )
        
    }
    renderSignup () {
        
        return(
            <div>
             
            <p className="quiz-item" id="quiz-description">Sign up or login to take our quiz and determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
            <input type="text" placeholder="Name" className="login-box"></input>
                <input type="text" placeholder="Username" className="login-box"></input>
                <input type="text" placeholder="Password" className="login-box"></input>
                <div className="submit-login">
                            <button onClick={this.onSubmit} className="submit-button" id="submit-container">
                                <a href="#results-page" onClick={this.onSubmit} className="submit-text" id="login-btn">SIGN UP</a>
                            </button>
                        </div> 
                        <div className = "have-account">
                        <p id="need-login">Already have an account?</p>
                        <div >
                            
                                <a onClick={this.onLoginClick}  id="btn-to-login">LOGIN</a>
       
                        </div></div></div></div>
        )
    }
    renderLogin() {
       
        return(
            <div>
             
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                <input type="text" placeholder="Username" className="login-box"></input>
                <input type="text" placeholder="Password" className="login-box"></input>
                <div className="submit-login">
                            <button onClick={this.onLogin} className="submit-button" id="submit-container">
                                <a href="#results-page" onClick={this.onSubmit} className="submit-text" id="login-btn">LOGIN</a>
                            </button>
                        </div>
                        <div className = "have-account">
                        <p id="need-login">Need to create an account?</p>
                        <div >
                            
                                <a onClick={this.onSignupClick}  id="btn-to-login">SIGN UP</a>
       
                        </div></div>
                        </div>
   
                        
         
            </div>
        )
    }

    render() {
        return(
            <div>
                 
                {this.state.signup ? this.renderSignup() : null}
                {this.state.login ? this.renderLogin() : null}
                {this.state.submit ? this.renderQuiz() : null}
        </div>)

    }
}