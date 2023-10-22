import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Services from "./pages/services"
import ErrorPage from "./error-page"

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
    }
  ]
)



export default router
