import React, {Component} from "react";
import "./deviceBlock.css"
import lamp_png from "../../../images/lamp.png"

export default class DeviceBlock extends Component {
    device = this.props.devices;

    render() {
        return (
            <div className="col-sm device-block">
                <img className="" src={lamp_png} alt=""/>
                <h4>{this.device.name}</h4>
                <p>{this.device.body}</p>
                <p><small>{this.device.type}</small></p>
                <button type={"sumbit"} className="btn btn-red">ON</button>
            </div>
        );
    }
}