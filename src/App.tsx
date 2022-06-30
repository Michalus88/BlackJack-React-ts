import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Register } from "./views/register/Register";
import { Home } from "./views/home/Home";
import { ErrorMessage } from "./components/error-message/ErrorMessage";
import { useError } from "./hooks/useError";
import { MainTemplate } from "./components/templates/main-template";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { error } = useError();
  const { user, signOut } = useAuth();

  return (
    <MainTemplate>
      {error ? <ErrorMessage message={error} /> : null}
      <Navigation logOut={signOut} user={user}></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;

const Login = () => {
  return <div>Login</div>;
};
