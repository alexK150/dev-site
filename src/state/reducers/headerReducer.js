import {CLOSE_MENU, MENU_ITEM_CLICK, OPEN_MENU, SET_LINK_VALUE} from "./headerTypes";

export const initialHeaderState = {
    linkValue: 0,
    anchorEl: null,
    isMenuOpened: false,
    selectedMenuItemIndex: 0
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
        case MENU_ITEM_CLICK: {
            return {
                ...state,
                anchorEl: null,
                selectedMenuItemIndex: action.payload
            }
        }
        default:
            return state
    }
}
