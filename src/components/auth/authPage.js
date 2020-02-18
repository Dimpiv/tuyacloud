import React , {Component} from 'react';
import {Button} from "reactstrap"
import "./authPage.css"
import AuthCarousel from "./carousel/authCarousel";

class AuthPage extends Component{
    render() {
        return(
            <div className="login-block">
            <div className="container auth-container">
                <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 className="text-center">TUYA CLOUD</h2>

                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="AuthInputEmail" className="text-uppercase">Логин</label>
                                <input type="text" className="form-control" placeholder="Demo"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="AuthInputPassword" className="text-uppercase">Пароль</label>
                                <input type="password" className="form-control" placeholder="Demo"/>
                            </div>

                            <div className="form-check">
                                <Button type="submit" className="btn btn-orange">Вход</Button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <AuthCarousel />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default AuthPage;