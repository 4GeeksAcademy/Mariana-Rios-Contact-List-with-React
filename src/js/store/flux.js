import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]
		},
		actions: {

			getContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/mrios')
					.then(resp => {
						console.log("is response succesful: " + resp.ok); // will be true if the response is successfull
						console.log("status code: "+ resp.status); // the status code = 200 or code = 400 etc.
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is where your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({contacts: data})
						console.log(getStore().contacts)
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			// ${method === "PUT" ? objContact.id : ""}
			uploadContact: (objContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}, 
					body: JSON.stringify(objContact)
				})
				.then(response => {
					console.log("uplaod response: ", response)
					console.log("uplaod JSON:", response.json())
					getActions().getContacts()})
				.catch(error => console.log(error))
			},

			editContact: (objContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${objContact.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					}, 
					body: JSON.stringify(objContact)
				})
				.then(response => {
					console.log("uplaod response: ", response)
					console.log("uplaod JSON:", response.json())
					getActions().getContacts()})
				.catch(error => console.log(error))
			},

			deleteContact: (id) => {
				console.log("deleteID", id)
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => {
					console.log("uplaod response: ", response)
					console.log("uplaod JSON:", response.json())
					getActions().getContacts()})
				.catch(error => console.log(error))
			}

		}
	};
};

export default getState;
