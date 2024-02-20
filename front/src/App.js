import "./App.css";
import First from "./Home/First";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { mainRoutes } from "./router/router";
import { Provider } from "react-redux";

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
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
