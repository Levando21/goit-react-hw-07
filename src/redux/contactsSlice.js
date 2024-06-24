/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(addContact.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteContact.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(
					(contact) => contact.id !== action.payload
				);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {} = contactsSlice.actions;

export const selectFilteredContacts = createSelector(
	(state) => state.contacts.items,
	(state) => state.filters,
	(contacts, filters) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filters.name.toLowerCase())
		);
	}
);

export default contactsSlice.reducer;
