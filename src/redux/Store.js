import { createStore } from "redux";
import taskReducer from "./TaskReducer";

const devtools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(taskReducer,devtools);


export default store ;