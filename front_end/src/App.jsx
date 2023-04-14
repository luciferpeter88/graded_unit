import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About_Us/About";
import Badges from "./components/Pages/Badges/Badges";
import Contact from "./components/Pages/Contact_Us/Contact_Us";
import AdminDash from "./components/Pages/Dashboard/admin/AdminDash";
import Gallery from "./components/Pages/Gallery/Gallery";
import Games from "./components/Pages/Games/Games";
import Register from "./components/Pages/Register/Register";
import SignIn from "./components/Pages/Sign_In/Sign_In";
import SingleGame from "./components/UI/games/SingleGame";
import SingleBadge from "./components/UI/badges/SingleBadge";
import AdminDashNav from "./components/shared/AdminDashNav";
import Helpers from "./components/Pages/Dashboard/admin/Helpers";
import AdminDGallery from "./components/Pages/Dashboard/admin/AdminDGallery";
import AdminEvents from "./components/Pages/Dashboard/admin/AdminEvents";
import ProtectedAdmin from "./components/Pages/Dashboard/admin/ProtectedAdmin";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="about" element={<About />} />
            <Route path="badges" element={<Badges />} />
            <Route path="badges/:badgeName" element={<SingleBadge />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="games" element={<Games />} />
            <Route path="games/:gamesName" element={<SingleGame />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* admin dashboard */}
          <Route
            path="/"
            element={
              <ProtectedAdmin>
                <AdminDashNav />
              </ProtectedAdmin>
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedAdmin>
                  <AdminDash />
                </ProtectedAdmin>
              }
            />
            <Route
              path="dashboard/helpers"
              element={
                <ProtectedAdmin>
                  <Helpers />
                </ProtectedAdmin>
              }
            />
            <Route
              path="dashboard/gallery"
              element={
                <ProtectedAdmin>
                  <AdminDGallery />
                </ProtectedAdmin>
              }
            />
            <Route
              path="dashboard/events"
              element={
                <ProtectedAdmin>
                  <AdminEvents />
                </ProtectedAdmin>
              }
            />
          </Route>
          {/* admin dashboard  */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
