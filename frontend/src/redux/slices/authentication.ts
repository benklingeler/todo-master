import { createSlice } from '@reduxjs/toolkit';
import { CredentialsPayload } from '../../types/authentication';
import { BaseSliceState } from '../../types/redux';
import { AppDispatch } from '../store';

type AuthenticationState = BaseSliceState & {
  loggedIn: boolean;
};

const initialState: AuthenticationState = {
  loading: 'idle',
  loggedIn: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    startLoading: (state: AuthenticationState) => {
      state.loading = 'loading';
    },
  },
});

export default authenticationSlice.reducer;

export const SignIn = (credentials: CredentialsPayload) => {
  return (dispatch: AppDispatch) => {
    dispatch(authenticationSlice.actions.startLoading());
  };
};
