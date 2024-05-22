import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../assets/data.json";

const initialState = {
  tasks: [],
  loading: true,
  error: "",
};

export const addTask = createAsyncThunk(
  "task/addTask",
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/addTask`, task);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getAllTasks`);
      const data = response.data;
      return type === "all"
        ? data.body.tasks
        : data.body.tasks.filter((task) => task.status === type);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/deleteTask/${taskId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/updateTask/${task?._id}`,
        task
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetTasks: (state) => {
      state.tasks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default taskSlice.reducer;
export const { setLoading, resetTasks } = taskSlice.actions;
