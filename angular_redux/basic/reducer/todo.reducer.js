
const initialState = [];

export function TodoReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}