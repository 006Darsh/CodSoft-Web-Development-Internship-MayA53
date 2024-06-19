import "./App.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/theme.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/common/Login/Login";
import RegisterPage from "./pages/common/Register/Register";
import UserHomePage from "./pages/common/Home/UserHome";
import AdminHomePage from "./pages/common/Home/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ReportsPage from "./pages/user/Reports/Common_Reports";
import ProfilePage from "./pages/user/Profile/Profile";
import ExamsPage from "./pages/admin/Exams/Exams";
import AddEditExam from "./pages/admin/Exams/AddEditExam";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import WriteExam from "./pages/user/WriteExam/Write_Exams";
import AdminReportsPage from "./pages/admin/Reports/Admin_Reports";
import { isTokenExp } from "./Utils/jwt";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  const token = localStorage.getItem("token");
  if (isTokenExp(token)) {
    localStorage.removeItem("token");
  }
  return (
    <>
      {loading && <Loader />}
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <UserHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams"
            element={
              <ProtectedRoute>
                <ExamsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams/add"
            element={
              <ProtectedRoute>
                <AddEditExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams/edit/:id"
            element={
              <ProtectedRoute>
                <AddEditExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute>
                <AdminReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/write-exam/:id"
            element={
              <ProtectedRoute>
                <WriteExam />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
