import { GET_QUESTIONS, ADD_USERTOKEN, GET_QUESTION, SET_ERROR } from "./actions";
const initialState = { user: JSON.parse(localStorage.getItem("userTokenDSA")) || null, data: { questions: [], totalPages: 0, totalQuestions: 0, platforms:[] }, question: {}, error: { value: false, message: "no error" } };

export const appReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USERTOKEN:
            return { ...store, user: payload };
        case GET_QUESTIONS:
            return { ...store, data: { ...payload } };
        case GET_QUESTION:
            return { ...store, question: { ...payload } };
        case SET_ERROR:
            return { ...store, error: { ...payload } };
        default: {
            return store;
        }
    }
}