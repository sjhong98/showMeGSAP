export const addData1 = (item) => {
    return {
        type: 'ADD_DATA1',
        payload: item,
    };
};

export const removeData1 = (item) => {
    return {
        type: 'REMOVE_DATA1',
        payload: item,
    };
};