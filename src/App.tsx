import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Register, Login, Game } from "./views";
import {
  Notification,
  NotificationMode,
} from "./components/notification/Notification";
import { useNotification } from "./hooks/useNotification";
import { MainTemplate } from "./components/templates/MainTemplate";
import { useAuth } from "./hooks/useAuth";
import { GameProvider } from "../src/providers/GameProvider";

function App() {
  const { message, mode } = useNotification();
  const { user, signOut } = useAuth();

  return (
    <MainTemplate user={user} logOut={signOut}>
      <>
        {message && mode === NotificationMode.ERROR && (
          <Notification mode={NotificationMode.ERROR} message={message} />
        )}
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
      </>
    </MainTemplate>
  );
}

export default App;
