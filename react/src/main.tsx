import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Props from "./components/props/Props.tsx";
import State from "./components/state/State.tsx";
import Events from "./components/events/Events.tsx";
import Conditional from "./components/conditional/Conditional.tsx";
import Refs from "./components/refs/Refs.tsx";
import AppWithContext from "./components/context/AppWithContext.tsx";
import AppWithHoc from "./components/hoc/AppWithHoc.tsx";
import Hooks from "./components/hooks/Hooks.tsx";
import Todo from "./components/todos/Todo.tsx";
import Caratula from "./components/caratula/Caratula.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TODOContextProvider from "./components/todos/todos-components/TaskContextProvider.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Caratula />,
      },
      {
        path: "props",
        element: <Props />,
      },
      {
        path: "state",
        element: <State />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "conditional",
        element: <Conditional />,
      },
      {
        path: "refs",
        element: <Refs />,
      },
      {
        path: "context",
        element: <AppWithContext />,
      },
      {
        path: "hoc",
        element: <AppWithHoc />,
      },
      {
        path: "hooks",
        element: <Hooks />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TODOContextProvider>
      <RouterProvider router={router} />
    </TODOContextProvider>
  </React.StrictMode>
);
