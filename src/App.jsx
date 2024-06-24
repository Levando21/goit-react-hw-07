/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useId, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";
import { v4 as uuidv4 } from "uuid";
import { fetchContacts } from "./redux/contactsOps";
import "./App.css";

function App() {
	const contacts = useSelector((state) => state.contacts.items);
	const filter = useSelector((state) => state.filters.name);
	const dispatch = useDispatch();
	const newId = useId();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	};

	const handleSubmit = (values, { resetForm }) => {
		dispatch(
			addContact({
				id: uuidv4(),
				name: values.name,
				number: values.number,
			})
		);
		resetForm();
	};

	const handleChange = (evt) => {
		dispatch(setFilter(evt.target.value));
	};

	const searchContact = (query) => {
		return contacts.filter(
			(contact) =>
				contact.name.toLowerCase().includes(query.toLowerCase()) ||
				contact.number.toLowerCase().includes(query.toLowerCase())
		);
	};

	const filteredContacts = searchContact(filter);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm
				id={newId}
				handleSubmit={handleSubmit}
			/>
			<SearchBox onChange={handleChange} />
			<ContactList
				contacts={filteredContacts}
				onDelete={handleDelete}
			/>
		</>
	);
}

export default App;
