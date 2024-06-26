/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import { addContact, deleteContact } from "./redux/contactsOps";
import { setFilter } from "./redux/filtersSlice";
import { fetchContacts } from "./redux/contactsOps";

import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}

export default App;
