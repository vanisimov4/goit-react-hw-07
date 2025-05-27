import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInProgress, fetchSuccess, fetchError } from "./contactsSlice";

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = "https://683576c8cd78db2058c19d08.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  try {
    // Індикатор завантаження
    dispatch(fetchInProgress());
    // HTTP-запит
    const response = await axios.get("/contacts");

    // Обробка даних
    dispatch(fetchSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchError(e.message));
  }
};
