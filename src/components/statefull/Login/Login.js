import React from 'react';
import '../../../assets/css/styles.css';
import Logo from '../../../assets/images/brand/logo1.png';
import Input from '../../stateless/UI/Form/Input';
import Checkbox from '../../stateless/UI/Form/Checkbox';

class Login extends React.Component {
    state={
        email : null,
        password : null,
        remember : false
    }
    setInputValueHandler = (event) => {
        let type = event.target.name;

        switch(type){
            case 'email': 
                this.setState({
                    email : event.target.value
                });
                break;
            case 'password' : 
                this.setState({
                    password: event.target.value
                });
                break;
            case 'rememberMe':
                this.setState({
                    remember: !this.state.remember
                });
                break;
            default :
                this.setState({
                    email: null,
                    password: null,
                    remember: false
                })
                break;
        }
    }
    verifyLoginHandler = () => {
        if(this.state.email === "nmahato@gmail.com" && this.state.password === "1234"){
            this.props.onclick();
        }else{
            alert("wrong credentials");
        }
    }
    submitFormOnEnterHandler = (e) => {
        if (e.charCode == 13) {
            this.verifyLoginHandler();
        }
    }
    render() {
        return (
            <div className="page">
                <div className="page-single">
                    <div className="container">
                        <div className="row">
                            <div className="col col-login mx-auto" onKeyPress={this.submitFormOnEnterHandler}> 
                                <div className="text-center mb-6">
                                    <img src={Logo} className="h-6" alt="" />
                                </div>
                                    <form className="card" action="" method="post">
                                        <div className="card-body p-6">
                                            <div className="card-title">
                                                Login to your account
                                            </div>
                                            <Input 
                                                label="Email Address"
                                                pholder="Enter Email"
                                                type="email"
                                                name="email"
                                                onchange={this.setInputValueHandler}
                                            />
                                            <Input
                                                label="Password"
                                                pholder="Password"
                                                type="password"
                                                name="password"
                                                onchange={this.setInputValueHandler}
                                            >
                                                <a href="./forgot-password.html" className="float-right small">I forgot password</a>
                                            </Input>
                                            <Checkbox 
                                                name="Remember me"
                                                value="rememberMe"
                                            />
                                        {/* <div class="form-group">
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label">Remember me</span>
                                             </label>
                                        </div> */}
                                            <div className="form-footer">
                                                <button type="button" onClick={this.verifyLoginHandler} className="btn btn-primary btn-block">Sign in</button>
                                            </div>
                                        </div>
                                    </form>
                                <div className="text-center text-muted">
                                    Don't have account yet? <a href="./register.html">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
     }
}

export default Login;