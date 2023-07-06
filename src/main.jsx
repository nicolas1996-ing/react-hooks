import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HookApp } from "./HookApp";
import { CounterApp } from "./01-use-state/CounterApp";
import { CounterWithCustomHook } from "./01-use-state/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-multipleCustomHooks/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayouteEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";
import "./08-useReducer/intro-reducer";
// import { ToDoApp } from "./08-useReducer/ToDoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
import "./08-useReducer-repaso/intro-reducer/intro-reducer.js";
import {ToDoApp} from "./08-useReducer-repaso/ToDoApp"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HookApp></HookApp>
    {/* <CounterApp></CounterApp> */}
    {/* <CounterWithCustomHook></CounterWithCustomHook> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <FormWithCustomHook></FormWithCustomHook> */}
    {/* <MultipleCustomHooks></MultipleCustomHooks> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <Layout></Layout> */}
    {/* <Memorize></Memorize> */}
    {/* <MemoHook></MemoHook> */}
    {/* <CallbackHook></CallbackHook> */}
    {/* <Padre></Padre> */}
    {/* <ToDoApp></ToDoApp> */}

    {/* high order component */}
    {/* <BrowserRouter>
      <MainApp />
    </BrowserRouter> */}

    <ToDoApp></ToDoApp>
  </React.StrictMode>
);
