import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "shared/api/contacts";


export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

export const addContact = createAsyncThunk("contacts/add", async (contactObj, thunkAPI) => {
  try {
    const result = await api.addContacts(contactObj);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const deleteContact = createAsyncThunk("contacts/remove", async (id, thunkAPI) => {
  try {
    await api.removeContacts(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});