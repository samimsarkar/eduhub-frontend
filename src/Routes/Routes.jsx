import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch('https://b610-lerning-platform-server-side-samim-sarkar.vercel.app/courses') },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/courses', element: <Courses></Courses>, loader: () => fetch('https://b610-lerning-platform-server-side-samim-sarkar.vercel.app/courses') },
            { path: '/course/:id', element: <CourseDetails></CourseDetails>, loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-samim-sarkar.vercel.app/course/${params.id}`) },
            { path: '/checkout/:id', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>, loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-samim-sarkar.vercel.app/course/${params.id}`) },
            { path: '*', element: <NotFound></NotFound> },
            { path: '/faq', element: <Faq></Faq> },
        ]
    }
])

export default router;