import { ADD_SELECTED_ANSWER, REMOVE_SELECTED_ANSWER, SUM_TOTAL_SCORE } from "../ActionTypes/ActionTypes";

export const addSelectedAnswer = (payload) => ({type: ADD_SELECTED_ANSWER, payload})
export const removeSelectedAnswer = (removingId) => ({type: REMOVE_SELECTED_ANSWER, removingId})
export const sumTotalScore = () => ({type: SUM_TOTAL_SCORE})