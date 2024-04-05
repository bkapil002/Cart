export const add = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'dispatch',
            payload: value
        });
    };
};

export const sub = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'sub',
            payload: value
        });
    };
};
