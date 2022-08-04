import axios from "axios";
export const ADD_USERTOKEN = "ADD_USERTOKEN";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTION = "GET_QUESTION";
export const SET_ERROR = "SET_ERROR";
export const GET_USER_DETAILS = "GET_USER_DETAILS";

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
    let res = await axios.get(`https://dsa-tracker-api.herokuapp.com/api/user/questions${generatedQuery}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    console.log(res.data.platforms)
    dispatch({ type: GET_QUESTIONS, payload: res.data });
}

export const getQuestion = (token, id) => async (dispatch) => {
    try {
        let res = await axios.get(`https://dsa-tracker-api.herokuapp.com/api/question/${id}`, {
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
    try {

        let res = await axios.post(`https://dsa-tracker-api.herokuapp.com/api/question/`, {
            ...payload
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        // console.log(res);

        let resp = await axios.get("https://dsa-tracker-api.herokuapp.com/api/user/questions", {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })

        dispatch({ type: GET_QUESTIONS, payload: resp.data });
    }
    catch (err) {
        dispatch({ type: SET_ERROR, payload: { value: true, message: err.message } });
    }
}

export const updateQuestion = (token, id, payload) => async (dispatch) => {
    // console.log(payload);
    try {

        let res = await axios.patch(`https://dsa-tracker-api.herokuapp.com/api/question/${id}`, {
            ...payload
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        // console.log(res);

        // let resp = await axios.get("https://dsa-tracker-api.herokuapp.com/api/user/questions", {
        //     headers: {
        //         'authorization': `Bearer ${token}`
        //     }
        // })

        // dispatch({ type: GET_QUESTIONS, payload: resp.data });
        dispatch(getQuestion(token, id));
    }
    catch (err) {
        dispatch({ type: SET_ERROR, payload: { value: true, message: err.message } });
    }
}

export const getUserDetails = (token) => async (dispatch) => {
    let res = await axios.get("https://dsa-tracker-api.herokuapp.com/api/user/details", {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    dispatch({ type: GET_USER_DETAILS, payload: res.data });
}

export const updateUserDetails = (token, id, payload) => async (dispatch) => {
    // console.log(id);
    let res = await axios.patch(`https://dsa-tracker-api.herokuapp.com/api/user/${id}`, {
        ...payload
    }, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    });

    // console.log(res.data);
    dispatch({ type: GET_USER_DETAILS, payload: res.data });
    let resp = await axios.get("https://dsa-tracker-api.herokuapp.com/api/user/check", {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
    // console.log(resp);
    // console.log(token == resp.data.token);
    localStorage.removeItem("userTokenDSA")
    // console.log(resp.data);
    dispatch({ type: ADD_USERTOKEN, payload: resp.data.token })
}