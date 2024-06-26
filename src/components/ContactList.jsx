/** @format */

import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import { deleteContact } from "../redux/contactsOps";
import { selectFilteredContacts } from "../redux/contactsSlice";

const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	};

	return (
		<div>
			<ul>
				{filteredContacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						onDelete={() => handleDelete(contact.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
