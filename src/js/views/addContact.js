import React, { useState, useEffect, useContext } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/addContact.css";

export const AddContact = () => {  
    const params = useParams()
    const navigate = useNavigate()
    const {store, actions} = useContext(Context)
 
    const [full_name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [id, setID] = useState("")

        useEffect(() => {
            if (params.index) {
                const contact = store.contacts.find((contact, idx) => idx == params.index)
            setFullName(contact.full_name)
            setEmail(contact.email)
            setAddress(contact.address)
            setPhone(contact.phone)
            setID(contact.id)
            }
        }, []);

    const onSubmit = () => {
        if (params.index){
            actions.uploadContact(objContact, "PUT")
            navigate("/")
        }
        else{
            actions.uploadContact(objContact, "POST")
        }
    }



    let objContact = {full_name: full_name,
        email: email,
        agenda_slug: "mrios",
        address: address,
        phone: phone,
        id: id}

    return(
        <div className="addConForm">
            <form className="row g-3">
                <h1>Add a New Contact</h1>
                <div class="col-12">
                    <label for="inputFullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="inputFullName" placeholder="Full Name" onChange={e => setFullName(e.target.value)} value={full_name}></input>
                </div>
                <div class="col-12">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="text" class="form-control" id="inputEmail" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} value={email}></input>
                </div>
                <div class="col-12">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="inputPhone" placeholder="Enter Phone Number" onChange={e => setPhone(e.target.value)} value={phone}></input>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Address" onChange={e => setAddress(e.target.value)} value={address}></input>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
                <Link to="/">
                        <span>or get back to contacts</span>
                </Link>
            </form>
        </div>
    )
}