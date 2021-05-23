import {SAVE_LOGIN,SAVE_TIPO} from '../actions/types'

const INIT_STATE = {
    Login: null,
    Tipo: "user",
    loading: false
};

const aux = (state = INIT_STATE, action) => {
    switch (action.type) {

        case SAVE_LOGIN:
            return { ...state, Login: action.payload };
        case SAVE_TIPO:
            return { ...state, Tipo: action.payload };
        default: return { ...state };
    }
}

export default aux