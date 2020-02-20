import React, {Component} from "react";
import DeviceBlock from "./deviceBlock";


export default class DashboardPage extends Component {
    // folder_img = "../../../images";
    devices = [
        {
            name:"Розетка Wi-Fi",
            body:"sdasdadsasd",
            type:"bfg-2000",
            url:"lamp.png"
        },
        {
            name:"Одноканальный выключатель",
            body:"asgsgjsfgsgsb",
            type:"dh-13",
            url:"lamp.png"
        },
        {
            name:"Датчик протечки",
            body:"sdasd35363dzfbzfbzfdbzdfbd",
            type:"zigbee-2020",
            url:"lamp.png"
        }];

    render() {
        return (
            <div className="dashboard-main">
                Dashboard!!!
                {this.devices.map((item, i) => <DeviceBlock devices={item}/>)}
            </div>
        );
    }
}