const GET_LIST = 'GET_LIST'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_LIST:
            return { list: action.data };
        default:
            return state
    }
}