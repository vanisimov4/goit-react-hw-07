import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchInProgress, fetchSuccess, fetchError } from './contactsSlice';

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = 'https://683576c8cd78db2058c19d08.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) =>
    // async dispatch =>
    {
      try {
        const response = await axios.get('/contacts');
        // При успішному запиті повертаємо проміс із даними
        return response.data;
      } catch (e) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(e.message);
      }
      // const response = await axios.get('/contacts');
      // return response.data;
      // try {
      //   // Індикатор завантаження
      //   dispatch(fetchInProgress());
      //   // HTTP-запит
      //   const response = await axios.get('/contacts');
      //   // Обробка даних
      //   dispatch(fetchSuccess(response.data));
      // } catch (e) {
      //   // Обробка помилки
      //   dispatch(fetchError(e.message));
      // }
    }
);
