import React, { Component } from "react";
class Component1 extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        return (
            <>
                <div>
                    <img src="about-goal.jpg" alt="" id="aboutImg" />
                </div>
                <div id="aboutComment">
                    <h4>You are on Namrata Univarsal. </h4>
                    <a href="https://namratauniversal.com/"> Click here to go to namrataunivarsal.in</a>
                </div>
                <h1 id="services">Services</h1>
                <div id="serviceSection" class="mobileres1">
                    <div class="serviceSection" onmouseover="bigImg1(this)" onmouseout="normalImg1(this)">
                        <div id="serviceSection1">
                            <h2>Business Portal Development</h2>
                            <p>At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a
                                plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.</p>
                            <img src="web1.jpeg" alt="" id="serviceImg1"/>
                        </div>
                    </div>
                    <div class="serviceSection" onmouseover="bigImg2(this)" onmouseout="normalImg2(this)">
                        <div id="serviceSection2">
                            <h2>Mobile Application Development</h2>
                            <p>We have designed and developed Android apps in categories, and productivity, shopping, social
                                messaging, gaming and entertainment, news and publishing and so on.</p>
                            <img src="mapd.jpeg" alt="" id="serviceImg2" />
                        </div>
                    </div>
                    <div class="serviceSection" onmouseover="bigImg3(this)" onmouseout="normalImg3(this)">
                        <div id="serviceSection3">
                            <h2>Website Development</h2>
                            <p>We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also
                                ensure that your website is a search engine friendly so that it attracts customers and sales.</p>
                            <img src="webd.jpeg" alt="" id="serviceImg3" />
                        </div>
                    </div>
                    <div class="serviceSection" onmouseover="bigImg4(this)" onmouseout="normalImg4(this)">
                        <div id="serviceSection4">
                            <h2>Custom Software</h2>
                            <p>Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions. We offer quality and valuable price in our software and services without sacrificing quality.</p>
                            <img src="cuts.jpeg" alt="" id="serviceImg4" />
                        </div>
                    </div>
                    <div class="serviceSection" onmouseover="bigImg5(this)" onmouseout="normalImg5(this)">
                        <div id="serviceSection5">
                            <h2>Graphic Designing</h2>
                            <p>Graphic design is the most common way of making visual content. The specialty of visual communicate is fundamental, especially for brands looking to connect with their target audience, and graphic design is the perfect solution.</p>
                            <img src="gd.jpeg" alt="" id="serviceImg5" />
                        </div>
                    </div>
                    <div class="serviceSection" onmouseover="bigImg6(this)" onmouseout="normalImg6(this)">
                        <div id="serviceSection6">
                            <h2>App Design</h2>
                            <p>Our experts cover an entire cycle of mobile app development, including business analysis, UX/UI design and development of your mobile application From ideation to final polish, our UX/UI design process.</p>
                            <img src="apd.jpeg" alt="" id="serviceImg6" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Component1;
