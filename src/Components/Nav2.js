import React, { Component } from "react";
class Nav2 extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        return (
            <nav id="nav2">
                <div>
                    <ul id="nav2box">
                        <li class="navbox">City</li>
                        <li class="navbox">Buy</li>
                        <li class="navbox">Rent</li>
                        <li class="navbox">Projects</li>
                        <li class="navbox">Agents</li>
                        <li class="navbox"><a href="#services">Services</a></li>
                        <li class="navbox">Resources</li>
                    </ul>
                </div>
                <div>
                    <button id="login">
                        <p class="navbox">login</p>
                    </button>
                </div>
            </nav>
        );
    }
}

export default Nav2;
