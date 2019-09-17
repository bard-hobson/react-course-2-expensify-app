import authReducer from '../../reducers/auth';

test('should login to app', () => {
    const action = {
        type: 'LOGIN',
        uid: 'bob'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should logout to app', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything'}, action);
    expect(state).toEqual({});
});