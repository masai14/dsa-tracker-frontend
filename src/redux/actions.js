import axios from "axios";
export const ADD_USERTOKEN = "ADD_USERTOKEN";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTION = "GET_QUESTION";
export const SET_ERROR = "SET_ERROR";

export const addUserToken = (payload) => ({ type: ADD_USERTOKEN, payload: payload });

export const getQuestions = (token, queryObj) => async (dispatch) => {
    let generatedQuery = "?";
    if (queryObj.page > 1) { 
        generatedQuery += "page=" + queryObj.page;
    }
    if (queryObj.favourites) {
        if (generatedQuery.length > 1) {
            generatedQuery += "&";
        }
        generatedQuery += "favourites=true";
    }
    if (Object.keys(queryObj.difficulty).length > 0) {
        let keys = Object.keys(queryObj.difficulty).filter(el => {
            // console.log(el, queryObj.difficulty[el], queryObj.difficulty);
            if (queryObj.difficulty[el]) {
                return true;
            } else { 
                return false;
            }
        });
        if (keys.length > 0) {
            if (generatedQuery.length > 1) {
                generatedQuery += "&";
            }
            generatedQuery += "difficulty=" + keys.join(",");
        }
    }
    if (Object.keys(queryObj.platform).length > 0) {
        let keys = Object.keys(queryObj.platform).filter(el => {
            // console.log(el, queryObj.platform[el], queryObj.platform);
            if (queryObj.platform[el]) {
                return true;
            } else {
                return false;
            }
        });
        if (keys.length > 0) {
            if (generatedQuery.length > 1) {
                generatedQuery += "&";
            }
            generatedQuery += "platform=" + keys.join(",");
        }
    }
    if (Object.keys(queryObj.status).length > 0) {
        let keys = Object.keys(queryObj.status).filter(el => {
            // console.log(el, queryObj.status[el], queryObj.status);
            if (queryObj.status[el]) {
                return true;
            } else {
                return false;
            }
        });
        if (keys.length > 0) {
            if (generatedQuery.length > 1) {
                generatedQuery += "&";
            }
            generatedQuery += "status=" + keys.join(",");
        }
    }
    if (queryObj.sortBy) {
        if (generatedQuery.length > 1) {
            generatedQuery += "&";
        }
        generatedQuery += "sortby=" + queryObj.sortBy;
    }
    // console.log(generatedQuery);
    let res = await axios.get(`http://localhost:2345/user/questions${generatedQuery}`, {
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

    let resp = await axios.get("http://localhost:2345/user/questions", {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })

    dispatch({ type: GET_QUESTIONS, payload: resp.data });
}