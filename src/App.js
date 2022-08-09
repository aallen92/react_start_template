import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { markNotAuthenticated } from "./redux/actions/authActions";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import DashboardScreen from "./routes/Dashboard";
import LoginScreen from "./routes/Login";
import RegisterScreen from "./routes/Register";
import ForgotPasswordScreen from "./routes/ForgotPassword";

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.signedIn === null) {
      dispatch(markNotAuthenticated());
    }
  }, [auth, dispatch]);

  return (
    <BrowserRouter>
      {auth.signedIn === null ? (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
          <LoadingSpinner />
          <p className='mt-4'>Welcome to Schedule Me</p>
        </div>
      ) : auth.signedIn ? (
        <Routes>
          <Route path='/' element={<DashboardScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
