import { GET_QUESTIONS, ADD_USERTOKEN } from "./actions";
const initialState = { user: JSON.parse(localStorage.getItem("userTokenDSA")) || null, questions: [] };

export const appReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USERTOKEN:
            return { ...store, user: payload };
        case GET_QUESTIONS:
            return { ...store, questions: [...payload] };
        default: {
            return store;
        }
    }
}