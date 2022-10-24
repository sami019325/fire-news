import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/main";



export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/about', element: <h1>About</h1> },
        ]
    }
])