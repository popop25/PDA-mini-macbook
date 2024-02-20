import "./App.css";
import First from "./Home/First";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { mainRoutes } from "./router/router";
import { Provider } from "react-redux";

function renderRoutes(routesObj) {
  console.log(routesObj);
  return routesObj.map((route) => {
    console.log(route);
    if (route) {
      return <Route path={route.path} element={route.element}></Route>;
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes> {renderRoutes(mainRoutes)}</Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
