import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content-copyright">
                &copy; {new Date().getFullYear().toString()}, Vibhore Jain. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;