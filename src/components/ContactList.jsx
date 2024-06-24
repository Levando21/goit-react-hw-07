/** @format */

import Contact from "./Contact";
import { useSelector } from "react-router-dom";
import { selectFilteredContacts } from "../redux/contactsSlice";
const ContactList = ({ contacts, onDelete }) => {
	const filteredNames = useSelector((state) => state.selectFilteredContacts);
	return (
		<div>
			<ul>
				{contacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
