import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/general/MainPage";
import Users from "./components/users/Users";
import Places from "./components/places/Places";
import UserPlaces from "./components/places/UserPlaces";
import Header from "./components/general/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/places" element={<Places />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
