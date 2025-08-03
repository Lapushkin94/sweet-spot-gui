import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import Users from "./components/users/Users";
import Places from "./components/places/Places";
import UserPlaces from "./components/places/UserPlaces";
import Header from "./components/header/Header";
import NewPlace from "./components/places/NewPlace";
import EditPlace from "./components/places/EditPlace";
import Authentication from "./components/auth/Authentication";
import { AuthContext } from "./utils/AuthContext";
import { useState, useCallback } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/places" element={<Places />} />
        {/* TODO: after fixing header nav bar add you can use this link
          <Route path="/:userId/myPlaces" element={<UserPlaces />} /> */}
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/edit/:placeId" element={<EditPlace />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/places" element={<Places />} />
        {/* TODO: after fixing header nav bar add you can use this link
          <Route path="/:userId/myPlaces" element={<UserPlaces />} /> */}
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<Navigate to="/authentication" replace />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <Header />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
