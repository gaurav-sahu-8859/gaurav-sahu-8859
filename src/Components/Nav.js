import React from "react";
function Nav(){
    return(
        <div>
             <nav id="nav1">
        <ul>
            <li id="navbox1" class="navbox">
                <img src="mainlogo.png" alt="namrataunivarsal" class="namratalogo"/>
            </li>

            <li id="navbox2" class="navbox">
                <p>
                    <a href="#home">HOME</a>
                </p>
            </li>
            <li id="navbox3" class="navbox">
                <p><a href="#intenship">INTERNSHIP</a></p>
            </li>
            <li id="navbox4" class="navbox">
                <div>
                    <select id="selector">
                        <option value="1">Training & development</option>
                        <option value="2">Technology</option>
                        <option value="3">Digital marketing</option>
                        <option value="4">SEO</option>
                    </select>
                    <input type="text" placeholder="search" id="search"/>
                    <input type="button" value="search" id="button"/>
                </div>
            </li>
            <li id="navbox5" class="navbox">
                <select>
                    <option value="">PAGES</option>
                    <option value="2"><a href="#services">Services</a></option>
                    <option value="3">Portfolio</option>
                    <option value="4">Pricing</option>
                    <option value="4">Team Members</option>
                    <option value="4">Reviews</option>
                    <option value="4"><a href="#clients">Clients</a></option>
                    <option value="4">Skills</option>
                </select>
            </li>

            <li id="navbox6" class="navbox">
                <p>
                    <a href="">About</a>
                </p>
            </li>
            <li id="navbox7" class="navbox">
                <p>
                    <a href="">CONTACT</a>
                </p>
            </li>

        </ul>
    </nav>
        </div>
    );
    
}

export default Nav;
