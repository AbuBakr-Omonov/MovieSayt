import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() =>  import("./Layout/Layout"))
const Home = lazy(() =>  import("./Home/Home"))
const Movies = lazy(() =>  import("./Movies/Movies"))
const Saved = lazy(() =>  import("./Saved/Saved"))
const Search = lazy(() =>  import("./Search/Search"))

const MainRouter = () => {
  return useRoutes([
     {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/movies",
                element:<Movies/>
            },
            {
                path: "/saved",
                element:<Saved/>
            },
            {
                path: "/search",
                element:<Search/>
            }
        ]
     }
  ])
}

export default MainRouter;