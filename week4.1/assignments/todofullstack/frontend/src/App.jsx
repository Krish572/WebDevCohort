import {BrowserRouter, Routes, Route} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Todo } from "./components/Todo";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./components/ErrorPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="signin" element={<SignIn/>}/>
          </Route>
          <Route path="/user" element={<Layout/>}>
            <Route path="todo" element={<Todo/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
