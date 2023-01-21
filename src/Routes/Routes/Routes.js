import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import QuizHome from "../../Pages/QuizHome/QuizHome";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
            }, 
            {
                path:"/categories/:id", 
                element:<QuizHome></QuizHome>,
                loader: ({params}) => fetch(`https://exam-hub-server-tarikulk.vercel.app/categories/${params.id}`) 
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            }
        ]
    }
])