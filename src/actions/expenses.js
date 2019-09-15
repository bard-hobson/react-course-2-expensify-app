import uuid from 'uuid';
import database from '../firebase/firebase';

// before using firebase how site worked...
// component will call an action generator
// action generator returns object
// component takes object and passes it to dispatches object
// redux store runs reducers and it changes

// for asynchorous calls though...
// component will call an action generator
// action generator returns function
// component dispatches a function {?}
// function runs (has the ability to dispatch
    // other actions and do whatever it wants)


// ADD_EXPENSE - action generated
export const addExpense = (expense) => ({
   type: 'ADD_EXPENSE',
   expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            })
            .catch((e) => {

        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});