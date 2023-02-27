let stateInit = {
    dragons: [],
    count: 0,
    error: "",
    rien: "",
};

let reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case "ADD_DRAGON":
            if (action.payload.trim() === "") {
                return { ...state, rien: "Vous n'avez rien écrit !" };
            }
            if (state.dragons.includes(action.payload)) {
                return { ...state, error: "Nom de dragon déja utilisé !" };
            }
            return {
                ...state,
                dragons: [...state.dragons, { task: action.payload }],
                count: state.count + 1,
                error: "",
                rien: "",
            };

        case "DELETE_DRAGON":
            const newDragons = [state.dragons].filter(
                (e, i) => e !== action.payload
            );
            return {
                ...state,
                dragons: [...newDragons],
                count: state.count - 1,
            };

        case "REVERSE_DRAGON":
            return {
                ...state,
                dragons: [...state.dragons].reverse(),
            };
        default:
            return state;
    }

    return state;
};

export default reducerDragon;
