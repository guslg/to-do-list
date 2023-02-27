let initialState = {
    time: 0,
};

const ReducerChrono = (state = initialState, action) => {
    switch (action.type) {
        case "chrono":
            return { ...state, time: state.time + 1 };
        case "reset":
            return { ...state, time: 0 };
        default:
            return state;
    }
};

export default ReducerChrono;
