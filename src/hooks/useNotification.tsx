import React, {
  useCallback,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";
import { NotificationMode } from "../components/notification/Notification";
interface NotificationContextType {
  message: string | null;
  dispatchNotification: (mode: NotificationMode, msg: string | null) => void;
  mode: NotificationMode;
}

export const GLOBAL_ERR_MSG = "Sorry. Please try later";

const NotificationContext = createContext<NotificationContextType>(null!);

export const ErrorProvider = ({ children }: { children: JSX.Element }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [mode, setMode] = useState<NotificationMode>(NotificationMode.ERROR);
  const timerId = useRef<NodeJS.Timeout>(null!);

  const dispatchNotification = useCallback(
    (notificationMode: NotificationMode, msg: string | null) => {
      clearTimeout(timerId.current);
      setMode(notificationMode);

      if (mode === NotificationMode.ERROR && msg === null) {
        setMessage(GLOBAL_ERR_MSG);
      } else {
        setMessage(msg);
      }
      timerId.current = setTimeout(() => {
        setMessage("");
      }, 5000);
    },
    []
  );

  return (
    <NotificationContext.Provider
      value={{ message, dispatchNotification, mode }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const errorContext = useContext(NotificationContext);

  if (!errorContext) {
    throw Error("useNotification needs to be used inside ErrorContext");
  }

  return errorContext;
};
