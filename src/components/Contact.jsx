/** @format */

const Contact = ({ contact, onDelete }) => (
	<li>
		<p>{contact.name}</p>
		<p>{contact.number}</p>
		<button onClick={onDelete}>Delete</button>
	</li>
);

export default Contact;
