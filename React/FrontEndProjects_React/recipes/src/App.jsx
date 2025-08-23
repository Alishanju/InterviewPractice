import ImagesCarousel from "./components/Carousel/imagesCarousel"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/Navbar/Home"
import RootLayout from "./components/RootLayout"
import RecipeDetails from "./components/Recipes/RecipeDetails"

const router=createBrowserRouter([
  {path:"/",
  element:<RootLayout />,
  children:[
    {path:'/',element:<ImagesCarousel />},
    {path:"/home",element:<Home />},
    {path:"/home/:id",element:<RecipeDetails />}
  ]
},
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
       
    </>
  )
}

export default App
