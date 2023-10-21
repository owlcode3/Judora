import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import ErrorPage from "./error-page"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/about-us",
      element: <About />,
      loader: () => <div>.....ssssssssssss</div>
    },
    {
      path: "/shop",
      element: <span >HELLO FROM "/shop"</span>,
      children: [
        { path: "", element: <p>HI FROM "/shop"</p> },
        { path: "/shop/:id", element: <span>HEY from shop</span> },
      ]
    }
  ]
)



export default router
