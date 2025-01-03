import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'jo',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('jo');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
