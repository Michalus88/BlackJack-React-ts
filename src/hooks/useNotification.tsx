import React, {
  useCallback,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";
import { NotificationMode } from "../components/notification/Notification";
interface ErrorContextType {
  message: string | null;
  dispatchNotification: (msg?: string | null, mode?: NotificationMode) => void;
  mode: NotificationMode;
}
const NotificationContext = createContext<ErrorContextType>(null!);

export const ErrorProvider = ({ children }: { children: JSX.Element }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [mode, setMode] = useState<NotificationMode>(NotificationMode.ERROR);
  const timerId = useRef<NodeJS.Timeout>(null!);

  const dispatchNotification = useCallback(
    (
      msg?: string | null,
      notificationMode: NotificationMode = NotificationMode.ERROR
    ) => {
      clearTimeout(timerId.current);
      setMode(notificationMode);

      switch (notificationMode) {
        case NotificationMode.SUCCESS:
          setMessage((prev) => (prev = msg ?? "Sorry. Please try later"));
          setMode(NotificationMode.SUCCESS);
          break;
        case NotificationMode.WARMING:
          setMessage(
            (prev) => (prev = msg ?? "You have not means. Please take credits")
          );
          setMode(NotificationMode.WARMING);
          break;
        case NotificationMode.ERROR:
          setMessage((prev) => (prev = msg ?? "Sorry. Please try later"));
          break;
        default:
          setMessage((prev) => (prev = msg ?? "Sorry. Please try later"));
          break;
      }

      timerId.current = setTimeout(() => {
        setMessage("");
      }, 7000);
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
    throw Error("useError needs to be used inside ErrorContext");
  }

  return errorContext;
};
