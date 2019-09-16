// Expenses Reducer
const expensesReducerDefaultState = [];

// 1. Reducers are pure functions
    // Output is only determined by the input
// 2. Never change state or action 


export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_EXPENSES':
            return action.expenses;
        default: 
            return state;
    }
};