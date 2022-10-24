import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/main";
import News from "../Components/News";



export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <News />,
                loader: (params) => fetch(`http://localhost:5000/category/${params.params.id}`)
            }
        ]
    }
])