import { GET_QUESTIONS, ADD_USERTOKEN, GET_QUESTION, SET_ERROR, GET_USER_DETAILS } from "./actions";
const initialState = { user: JSON.parse(localStorage.getItem("userTokenDSA")) || null, data: { questions: [], totalPages: 1, platforms: [] }, question: {}, error: { value: false, message: "no error" }, userDetails: {} };

export const appReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USERTOKEN:
            // console.log(JSON.parse(localStorage.getItem("userTokenDSA")));
            // console.log(localStorage.setItem("userTokenDSA", payload)));
            // console.log(payload);
            localStorage.setItem("userTokenDSA", JSON.stringify(payload));
            // localStorage.setItem("userTokenDSA", JSON.stringify());
            return { ...store, user: payload };
        case GET_QUESTIONS:
            return { ...store, data: { ...payload } };
        case GET_QUESTION:
            return { ...store, question: { ...payload } };
        case SET_ERROR:
            return { ...store, error: { ...payload } };
        case GET_USER_DETAILS:
            return { ...store, userDetails: { ...payload } };
        default: {
            return store;
        }
    }
}