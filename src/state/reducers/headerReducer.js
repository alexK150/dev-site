import {CLOSE_MENU, OPEN_MENU, SET_LINK_VALUE} from "./headerTypes";

export const initialHeaderState = {
    linkValue: 0,
    anchorEl: null,
    isMenuOpened: false
}

export const headerReducer = (state , action) => {
    switch (action.type) {
        case SET_LINK_VALUE: {
            return {
                ...state,
                linkValue: action.payload
            }
        }
        case OPEN_MENU: {
            return {
                ...state,
                anchorEl: action.payload,
                isMenuOpened: true
            }
        }
        case CLOSE_MENU: {
            return {
                ...state,
                anchorEl: null,
                isMenuOpened: false
            }
        }
        default:
            return state
    }
}
