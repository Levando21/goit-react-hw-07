/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6679998c18a459f63950a9b3.mockapi.io/api/v1/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
	try {
		const response = await axios.get("/contacts");
		return response.data;
	} catch (error) {
		console.error("Error fetching contacts:", error);
		throw error;
	}
});

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (newContact) => {
		try {
			const response = await axios.post("/contacts", newContact);
			return response.data;
		} catch (error) {
			console.error("Error adding contact:", error);
			throw error;
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId) => {
		try {
			await axios.delete(`/contacts/${contactId}`);
			return contactId;
		} catch (error) {
			console.error("Error deleting contact:", error);
			throw error;
		}
	}
);
