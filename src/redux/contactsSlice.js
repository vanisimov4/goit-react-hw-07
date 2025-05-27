import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  // Об'єкт case-редюсерів
  reducers: {
    // Виконається в момент старту HTTP-запиту
    fetchInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact } = slice.actions;
export const { fetchInProgress, fetchSuccess, fetchError } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
