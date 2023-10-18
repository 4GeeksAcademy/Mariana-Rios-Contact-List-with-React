import React, { Component } from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    return (
        <div className="container">
            <div>
                <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"></img>
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <div className="iconinfo">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.address}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-phone"></i>
                    <span>{props.phone}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-envelope"></i>
                    <span>{props.email}</span>
                </div>
            </div>
            <div className="rightIcons">
                <Link to={"/edit/" + props.idx}>
                    <button><i className="fa-solid fa-pencil"></i></button>
                </Link>
                <button><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default ContactCard