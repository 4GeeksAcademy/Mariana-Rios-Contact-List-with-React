import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import injectContext from "../store/appContext";

import "../../styles/contactCard.css";
import "../../styles/contact.css";


import ContactCard from "../component/contactCard";


export const Contact = () => {
    const { store, actions } = useContext(Context);
    console.log("contacts from contact", store.contacts);
    return (
        <div className="body">
            <div className="d-flex flex-row-reverse">
                <Link to="/addContact">
                    <button className="addConBtn btn btn-success">Add New Contact</button>
                </Link>
            </div>
            {store.contacts.map((contact, i) => <ContactCard name={contact.full_name} address={contact.address} phone={contact.phone} email={contact.email} idx={i} key={i} contactID={contact.id} deleteContact={actions.deleteContact} />)}
        </div>
    )
}

export default injectContext(Contact);

