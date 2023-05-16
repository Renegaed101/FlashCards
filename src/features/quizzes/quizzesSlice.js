import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    } ,
    reducers: {
        addQuiz: (state,action) => {
            state.quizzes[action.payload.id] = action.payload;
        } 
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const addQuizThunk = (quiz) => {
    return async (dispatch,getState) => {
        dispatch(quizSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdToTopic({quizId: quiz.id, topicId: quiz.topicId}));
    }
}

export const {addQuiz} = quizSlice.actions;
export default quizSlice.reducer;
