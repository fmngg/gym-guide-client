import { CommentDto } from '@/core/api/dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface ICommentState {
  comments: CommentDto[];
}

const initialState: ICommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentDto[] | []>) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentSlice.actions;

export const selectComments = (state: AppState) => state.comment.comments;

export const commentReducer = commentSlice.reducer;
