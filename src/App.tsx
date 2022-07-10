import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home, Register, Login, Game } from "./views";
import {
  Notification,
  NotificationMode,
} from "./components/notification/Notification";
import { useNotification } from "./hooks/useNotification";
import { MainTemplate } from "./components/templates/main-template";
import { useAuth } from "./hooks/useAuth";
import { GameProvider } from "../src/providers/GameProvider";

function App() {
  const { message, mode } = useNotification();
  const { user, signOut } = useAuth();

  return (
    <MainTemplate>
      {message && mode === NotificationMode.ERROR && (
        <Notification message={message} />
      )}
      <Navigation logOut={signOut} user={user}></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/game"
          element={
            <GameProvider>
              <Game />
            </GameProvider>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
