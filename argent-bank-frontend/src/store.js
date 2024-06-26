// src/store.js
import { configureStore } from '@reduxjs/toolkit';
// Importe tes slices ici quand ils seront créés
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    // Ajoute tes reducers ici
    user: userReducer,

  },
});

console.log('Initial state:', store.getState());

export default store;
