import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() =>  import("./Layout/Layout"))
const Home = lazy(() =>  import("./Home/Home"))
const Movies = lazy(() =>  import("./Movies/Movies"))
const Saved = lazy(() =>  import("./Saved/Saved"))
const Search = lazy(() =>  import("./Search/Search"))
const MovieDetail = lazy(() =>  import("./Movies/MovieDetail"))
const PersonDetail = lazy(() =>  import("./Person/PersonDetail"))

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
            },
            {
                path: "/movieDetail/:id",
                element:<MovieDetail/>
            },
            {
                path: "/personDeatil/:id",
                element:<PersonDetail/>
            }
        ]
     }
  ])
}

export default MainRouter;