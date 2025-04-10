import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";
import Item from "./routes/Item";
import Favourites from "./routes/Favourites";
import PathError from "./Error/PathError";
function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <PathError />,

      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
        { path: "item", element: <Item /> },
        { path: "favourites", element: <Favourites /> },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
