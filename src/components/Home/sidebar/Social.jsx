import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Social() {
    return (

        <div className="socialMain">
            <div className="socialBox" style={{ backgroundColor: "#1877f2" }}>
                <FaFacebookF style={{ fontSize: "20px", color: "white", backgroundColor: "#1877f2" }} />
                <span className="socialIconText">
                    13,450 Likes
                </span>
            </div>
            <div className="socialBox" style={{ backgroundColor: "#bd081c" }}>
                <FaPinterest style={{ fontSize: "20px", color: "white", backgroundColor: "#bd081c" }} />
                <span className="socialIconText">
                    10,471 Fans
                </span>
            </div>
            <div className="socialBox" style={{ backgroundColor: "#1DA1F2" }}>
                <FaTwitter style={{ fontSize: "20px", color: "white", backgroundColor: "#1DA1F2" }} />
                <span className="socialIconText">
                    12,120 Followers
                </span>
            </div>
            <div className="socialBox" style={{ backgroundColor: "#c32aa3" }}>
                <FaInstagram style={{ fontSize: "20px", color: "white", backgroundColor: "c32aa3" }} />
                <span className="socialIconText">
                    23,150 Followers
                </span>
            </div>
            <div className="socialBox" style={{ backgroundColor: "#ff0000" }}>
                <FaYoutube style={{ fontSize: "20px", color: "white", backgroundColor: "#ff0000" }} />
                <span className="socialIconText">
                    17,378 Subscribers
                </span>
            </div>
        </div>
    )
}

export default Social