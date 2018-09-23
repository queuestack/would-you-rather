import { ActionTypes } from '../constants'

export default questions = (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}