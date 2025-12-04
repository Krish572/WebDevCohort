import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Todo } from "./components/Todo";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./components/ErrorPage";
import { Todos } from "./components/Todos";
import { PublicRoute } from "./components/PublicRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<PublicRoute/>}>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Navigate to="/signin" replace/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="signin" element={<SignIn/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Route>
          </Route>

          
          <Route element={<ProtectedRoute/>}>
            <Route path="/user" element={<Layout/>}>
              <Route path="todo" element={<Todo/>}/>
              <Route path="todo/:id" element={<Todo/>}/>
              <Route path="todos" element={<Todos/>}/>
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
