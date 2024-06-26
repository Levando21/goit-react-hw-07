/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		status: "idle",
		error: null,
	},
	reducers: {
		resetContacts: (state) => {
			state.items = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(
					(contact) => contact.id !== action.payload
				);
			});
	},
});

export const selectFilteredContacts = (state) => {
	const { items } = state.contacts;
	const filter = state.filters.name.toLowerCase();
	return items.filter(
		(contact) =>
			contact.name.toLowerCase().includes(filter) ||
			contact.number.toLowerCase().includes(filter)
	);
};

export default contactsSlice.reducer;
