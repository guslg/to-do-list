export const addDragon = (payload) => {
    return {
        type: "ADD_DRAGON",
        payload,
    };
};

export const deleteDragon = (payload) => {
    return {
        type: "DELETE_DRAGON",
        payload,
    };
};

export const reverseDragon = () => {
    return {
        type: "REVERSE_DRAGON",
    };
};
