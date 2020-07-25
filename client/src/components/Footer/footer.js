import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
    return (
        <div className="pageFooter">
            <span className="text-white">Copyright &#169; 2020 BEYOND VIRTUAL BUSINESS SERVICES - All Rights Reserved</span>
            <br />
            <span className="text-white">info@beyondvs.com.au </span>
            {/* <span className="text-white">| 0412 564 166</span> */}
            <br />
            <span className="text-white">ROSE BAY, NSW</span>
        </div>
    );
}

export default Footer;
