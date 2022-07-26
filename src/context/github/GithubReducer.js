const githubReducer = (state, action) => { 
    switch (action.type) { 
        case "GET_USERS":
            return { ...state, users: action.payload }
        case "CLEAR_RESULTS":
            return {
                ...state, users: []
            }
        default : return state
    }
}

export default githubReducer