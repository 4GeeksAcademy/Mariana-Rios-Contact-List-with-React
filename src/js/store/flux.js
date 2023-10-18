import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]
		},
		actions: {

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
			uploadContact: (objContact, method) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: method,
					headers: {
						"Content-Type": "application/json"
					}, 
					body: JSON.stringify(objContact)
				})
				.then(response => {
					console.log("uplaod response: ", response)
					console.log("uplaod JSON:", response.json())})
				.catch(error => console.log(error))
			}

		}
	};
};

export default getState;
