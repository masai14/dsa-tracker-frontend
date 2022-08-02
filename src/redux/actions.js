import axios from "axios";
export const ADD_USERTOKEN = "ADD_USERTOKEN";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTION = "GET_QUESTION";
export const SET_ERROR = "SET_ERROR";

export const addUserToken = (payload) => ({ type: ADD_USERTOKEN, payload: payload });

export const getQuestions = (token) => async (dispatch) => {

    let res = await axios.get("http://localhost:2345/question/user/questions", {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })

    dispatch({ type: GET_QUESTIONS, payload: res.data });
}

export const getQuestion = (token, id) => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:2345/question/${id}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        dispatch({ type: GET_QUESTION, payload: res.data });
    } catch (err) {
        dispatch({ type: SET_ERROR, payload: { value: true, message: err.message } });
    }
}

export const postQuestion = (token, payload) => async (dispatch) => {
    // console.log(payload);
    let res = await axios.post(`http://localhost:2345/question/`, {
        ...payload
    }, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    // console.log(res);

    let resp = await axios.get("http://localhost:2345/question/user/questions", {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })

    dispatch({ type: GET_QUESTIONS, payload: resp.data });
}