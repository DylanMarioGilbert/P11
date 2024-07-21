import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  user: null,
  profile: {
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      userName: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
        console.log('loginStart action dispatched');
      state.status = 'loading';
    },
    loginSuccess(state, action) {
      state.status = 'succeeded';
      localStorage.setItem('token', action.payload.token); 
      console.log(`Token stored: ${action.payload.token}`);
    },
    loginFailure(state, action) {
        console.log('loginFailure action dispatched', action.payload);
      state.status = 'failed';
      state.error = action.payload.message;
    },
    getUserProfileStart(state) {
      state.status = 'loading';
    },
    getUserProfileSuccess(state, action) {
      state.status = 'succeeded';
      state.profile = action.payload;
    },
    getUserProfileFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateUsernameStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateUsernameSuccess(state, action) {
      state.loading = false;
      state.profile.userName = action.payload.userName; // Mettre à jour le nom d'utilisateur dans le store
    },
    updateUsernameFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
        console.log('logout action dispatched');
      state.user = null;
      state.profile = null;
      state.status = 'idle';
      state.error = null;
    }
    },
  });

export const { loginStart, loginSuccess, loginFailure, logout, getUserProfileStart, getUserProfileSuccess, getUserProfileFailure, updateUsernameStart, updateUsernameSuccess, updateUsernameFailure  } = userSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
    try {
      dispatch(loginStart());
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
      const { token } = response.data.body;
      console.log(`Login response data: ${JSON.stringify(response.data)}`);
      dispatch(loginSuccess({token}));
      getUserProfile();
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      dispatch(loginFailure(error.response ? error.response.data : error.message));
    }
  };

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserProfileStart());
    const token = localStorage.getItem('token');
    console.log(`Token retrieved: ${token}`);
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(`Profile response: ${JSON.stringify(response.data)}`);

    dispatch(getUserProfileSuccess(response.data.body));
  } catch (error) {
    console.error(`Profile error: ${error.response ? error.response.data : error.message}`);
    dispatch(getUserProfileFailure(error.response ? error.response.data : error.message));
  }
};

export const updateUsername = (newUsername) => async (dispatch) => {
  try {
    dispatch(updateUsernameStart());
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.put('http://localhost:3001/api/v1/user/profile', { userName: newUsername }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    console.log('Update username response:', response.data);

    // Dispatch action to update username in Redux store
    dispatch(updateUsernameSuccess(response.data.body));
  } catch (error) {
    console.error('Update username error:', error.response ? error.response.data : error.message);
  dispatch(updateUsernameFailure(error.response ? error.response.data : error.message));
  }
};




export default userSlice.reducer;


