export const initialHeaderState = {
    linkValue: 0
}

export const headerReducer = (state , action) => {
    switch (action.type) {
        case 'SET_LINK_VALUE': {
            return {
                ...state,
                linkValue: action.payload
            }
        }
        default:
            return state
    }
}
