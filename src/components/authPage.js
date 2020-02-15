import React , {Component} from 'react';
import "./authPage.css"
import AuthCarousel from "./authCarousel";


class AuthPage extends Component{
    render() {
        return(
            <div className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 className="text-center">TUYA CLOUD</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Логин</label>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Пароль</label>
                                <input type="password" className="form-control" placeholder=""/>
                            </div>

                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input"/>
                                        <small>Запомнить</small>
                                </label>
                                <button type="submit" className="btn btn-info float-right">Вход</button>
                            </div>

                        </form>
                        <div className="copy-text"><div className="fa fa-coffee"/>&nbsp;
                            <a href={"http://micrometrica.ru"}>
                                micrometrica.ru
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <AuthCarousel/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AuthPage;