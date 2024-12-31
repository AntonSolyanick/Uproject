import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('set usrname', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '111',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('222'))
        ).toEqual({ username: '222' });
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '111',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('222'))
        ).toEqual({ password: '222' });
    });
});
