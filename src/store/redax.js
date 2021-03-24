const initialState = {
    input: '',
}

const redax = (state = initialState, action) => {
    console.log(action)

    if (action.type === "INPUT") {
        return{
            ...state,
            input: state.input,
        };
    };

    if (action.type === "CLICK") {
        return {
            ...state,
            input: state.input,
        };
    };
    return state;
};

export default redax;