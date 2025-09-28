import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Characters } from "./pages/Characters";
import { Planets } from "./pages/Planets";
import { Vehicles } from "./pages/Vehicles";
import ScrollToTop from "./components/ScrollToTop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <ScrollToTop />
          <Layout />
        </>
      }
      errorElement={<h1>Not found!</h1>}
    >
      {/* Index en v6 */}
      <Route index element={<Home />} />

      {/* Rutas hijas RELATIVAS (sin / inicial) */}
      <Route path="single/:theId" element={<Single />} />
      <Route path="characters/:theid" element={<Characters />} />
      <Route path="planets/:idPlanet" element={<Planets />} />
      <Route path="vehicles/:idvehiculo" element={<Vehicles />} />
    </Route>
  )
);