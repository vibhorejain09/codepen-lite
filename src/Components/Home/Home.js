import React from 'react'
import './Home.css';
import hero from '../../Assets/hero.svg';
import windowWidth from '../../Utils/windowWidth';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home() {
    const width = windowWidth()
    const halfWidth = width / 2
    return (
        <div id="about">
            <div className="heading heading-font">
                <span style={{ borderBottom: '2px solid rgb(var(--primary-text-color))', color: 'rgb(var(--content-text-color))', alignItems: 'center' }}>
                    About CodePen-Lite
                </span>
            </div>
            <div className="about-codepenlite" style={{ flexDirection: halfWidth > 500 ? "row" : "column", justifyContent: halfWidth > 500 ? "space-around" : "center" }}>
                <div>
                    <img src={hero} alt="coverimg" style={{ width: halfWidth > 500 ? halfWidth * 0.7 : width * 0.7 }} className="about-codepenlite-cover" />
                </div>
                <div className="about-codepenlite-content" style={{ color: 'rgb(var(--content-text-color))' }}>
                    <p style={{ maxWidth: "700px", lineHeight: "40px", fontSize: "1.3rem" }}>

                        CodePen-Lite is the general editor of basic setup for frontend designing
                        made using code mirror libray of react, have real time editor of HTML, CSS, Javascript.
                        Also have features like react router dom.
                        <br />
                        <br />
                        One of the main feature of this is that your work is
                        saved in the local storage so whenver you want you can you can reume from where you have left.

                    </p>
                    <NavLink to='/editor' style={{ textDecoration: 'none' }}>
                        <div className="btn">
                            <span >
                                Open Editor
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home;
