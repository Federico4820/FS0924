import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyFilms from "./Components/MyFilms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MovieDetails from "./Components/MovieDetails ";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<MyFilms />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
