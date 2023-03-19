import Header from "./Component/Header";
import "./App.css";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./Component/Redux/store";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";  


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element: <MainContainer/>,
      },
      {
        path:"watch",
        element: <WatchPage/>,
      },
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}/>
           
      </div>
    </Provider>
  );
}

export default App;
