/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6679998c18a459f63950a9b3.mockapi.io/api/v1/";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/contacts");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (newContact, _, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", newContact);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, _, thunkAPI) => {
		try {
			await axios.delete(`/contacts/${contactId}`);
			return contactId;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
