import { createSlice } from "@reduxjs/toolkit";

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

export const {addQuiz} = quizSlice.actions;
export default quizSlice.reducer;
