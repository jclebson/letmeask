import { createSlice } from "@reduxjs/toolkit";

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type QuestionType = Omit<FirebaseQuestions, "likes">;

const slice = createSlice({
  name: "qusetions",
  initialState: {},
  reducers: {},
});

export default slice.reducer;
