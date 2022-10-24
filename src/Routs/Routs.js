import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/main";



export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Home />, children: [
                    { path: '/catagory/:id' }
                ]
            },
        ]
    }
])