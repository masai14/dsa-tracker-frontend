import axios from "axios";
export const ADD_USERTOKEN = "ADD_USERTOKEN";
export const GET_QUESTIONS = "GET_QUESTIONS";

export const addUserToken = (payload) => ({ type: ADD_USERTOKEN, payload: payload });

export const getQuestions = (token) => async (dispatch) => {

    let res = await axios.get("http://localhost:2345/question/user/questions", {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })

    dispatch({ type: GET_QUESTIONS, payload: res.data });
}
