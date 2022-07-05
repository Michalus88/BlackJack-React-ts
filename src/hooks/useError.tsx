import React, {
  useCallback,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";
interface ErrorContextType {
  error: string | null;
  dispatchError: (message?: string | null) => void;
}
const ErrorContext = createContext<ErrorContextType>(null!);

export const ErrorProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<string | null>(null);
  const timerId = useRef<NodeJS.Timeout>(null!);

  const dispatchError = useCallback((message?: string | null) => {
    clearTimeout(timerId.current);
    setError((prev) => (prev = message ?? "Sorry. Please try later"));
    timerId.current = setTimeout(() => {
      setError("");
    }, 7000);
  }, []);

  return (
    <ErrorContext.Provider value={{ error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error("useError needs to be used inside ErrorContext");
  }

  return errorContext;
};
