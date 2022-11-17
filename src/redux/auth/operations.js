import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk();
export const logIn = createAsyncThunk();
export const logOut = createAsyncThunk();
export const refreshUser = createAsyncThunk();
