import React, { Component } from "react";
class Footer extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        return (
            <>
                <footer onmouseover="remover1(this)" onmouseout="remover2(this)">

                    <div id="footBox1">
                        <h2>branches in India</h2>
                        <p>property in New Delhi, Property in Mumbai, Property in Chennai, Property in Pune, Property in Noida,
                            Property in Gurgaon, Property in Bangalore, Property in Ahmedabad</p>
                        <h2>New Projects in India</h2>
                        <p>New Projects in New Delhi, New Projects in Mumbai, New Projects in Chennai, New Projects in Pune, New
                            Projects in Noida, New Projects in Gurgaon, New Projects in Bangalore, New Projects in Ahmedabad</p>
                    </div>
                    <div id="footBox2">
                        <ul>
                            <li id="logo">
                                <img src="mainlogo.png" alt=""/>
                                    {/*<h1 id="lg1">Namrata </h1>
                                    <h1 id="lg2"> Univarsal</h1>  */}
                            </li>
                            <li>Home</li>
                            <li>Internship</li>
                            <li>
                                <select name="training" id="training">
                                    <option value="1">Training & Development</option>
                                    <option value="2">Technology</option>
                                    <option value="3">Digital marketing</option>
                                    <option value="4">SEO</option>
                                </select>
                            </li>
                            <li>
                                <select name="training" id="training">
                                    <option value="1">Pages</option>
                                    <option value="2">Services</option>
                                    <option value="3">Portfolio</option>
                                    <option value="4">Pricing</option>
                                    <option value="4">Team Members</option>
                                    <option value="4">Reviews</option>
                                    <option value="4">Clients</option>
                                    <option value="4">Skills</option>
                                </select>
                            </li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Pay</li>
                            <li>Development</li>
                        </ul>
                    </div>
                    <div id="footBox3">
                        <h2>Contact Us</h2>
                        <p>1234567899, 9876543219</p>
                        <h2>Head Office:</h2>
                        <p>3C, A1 Sector 10, Noida
                            Uttar Pradesh, India</p>
                        <h2>New Branch Office :</h2>
                        <p>2nd floor plot no.-64 Block-F, Sector-8 Noida
                            Uttar Pradesh, India</p>
                        <h2>Branch Office :</h2>
                        <p>A-50, Shalimar Garden Main Near
                            New Seemapuri Depot Delhi NCR</p>
                        <h4>phone: 1234567899, 9987654321</h4>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
