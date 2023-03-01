import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp, { SignIn } from "./pages/sign";
import { RequireAuth } from "./middleware/signAuth";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Landing from "./pages/ProtectedRoutes/landing";
import ResumeBuilder from "./pages/ProtectedRoutes/resume";
import DashBoard from "./pages/ProtectedRoutes/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <RequireAuth>
              <ProtectedRoutes />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Landing />} />
          <Route path="/internship" element={<div></div>} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/dashboard/*" element={<DashBoard />}/>
          <Route path="/blog" element={<div></div>} />
          <Route path="/about" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
