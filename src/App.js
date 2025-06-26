import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/general/MainPage";
import UserList from "./components/UserList";
import PlaceList from "./components/PlaceList";
import Header from "./components/general/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/placeList" element={<PlaceList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
