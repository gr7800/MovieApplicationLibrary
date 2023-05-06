// This code defines the routes for the main application
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddMovies from "../pages/AddMovies";
import DetailsPage from "../pages/DetailsPage";


// Defining the main routes using the React Router Routes component
export default function MainRoutes() {
  return (
    <Routes>
      {/* Route for the home page, which is protected by the PrivateRoutes component */}
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/addmovies" element={<AddMovies/>}></Route>
      <Route path="/details" element={<DetailsPage/>}></Route>
    </Routes>
  );
}