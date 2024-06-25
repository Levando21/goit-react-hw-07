/** @format */

import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
const ContactList = ({ onDelete }) => {
	const filteredNames = useSelector(selectFilteredContacts);
	return (
		<div>
			<ul>
				{filteredNames.map((contact) => (
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
