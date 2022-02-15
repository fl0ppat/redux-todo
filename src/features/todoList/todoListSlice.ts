import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { v1, v4 } from 'uuid';

const initialState: Task[] = [
  {
    title: 'Название',
    status: false,
    uuid: v4()
  },
  {
    title: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
    status: true,
    uuid: v4()
  },
  {
    title: 'Название 2',
    status: false,
    uuid: v4()
  },
  {
    title: 'Название 3',
    status: false,
    uuid: v4()
  },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<string>) => {
     return state.filter(item => item.uuid !== action.payload)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(item => item.uuid === action.payload)
      state[index].status = !state[index].status 
    }
  }
})

export const { addTask, removeTask, toggleTask } = todoSlice.actions
export default todoSlice.reducer