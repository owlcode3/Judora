import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Services from "./pages/services"
import ErrorPage from "./error-page"
import AboutUs from "./pages/about-us"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]
)



export default router
