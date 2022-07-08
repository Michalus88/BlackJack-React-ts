import React, { useContext, useEffect, useState, createContext } from "react";
import { RegisterReq, LoggedUserRes } from "types";
import { useError } from "./";
import { useNavigate } from "react-router";
import { isResErrorMsg } from "../helpers/isErrorMsg";

interface AuthContextType {
  user: LoggedUserRes | null;
  signIn: (data: RegisterReq) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const { dispatchError, error } = useError();
  const [user, setUser] = useState<LoggedUserRes | null>(null);
  const [wasPrevMsgUnauthorized, setWasPrevMsgUnauthorized] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/user", {
          credentials: "include",
        });
        if (res.ok) {
          const user = (await res.json()) as LoggedUserRes;
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (err) {
        dispatchError("Server is anavailable.");
      }
    })();
  }, []);

  useEffect(() => {
    if (wasPrevMsgUnauthorized) {
      setWasPrevMsgUnauthorized(false);
      signOut();
    }
    if (error === "Unauthorized") {
      setWasPrevMsgUnauthorized(true);
    }
  }, [error]);

  const signIn = async (data: RegisterReq) => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (await isResErrorMsg(res)) {
        dispatchError("wrong login or password");
      } else {
        const user = (await res.json()) as LoggedUserRes;
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      dispatchError();
    }
  };

  const signOut = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const errMsg = await isResErrorMsg(res);
      if (res.status === 401) {
        setUser(null);
      } else {
        if (errMsg) {
          dispatchError(errMsg);
        } else {
          setUser(null);
        }
      }
    } catch (error) {
      dispatchError();
    } finally {
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error("useAuth needs to be used inside AuthContext");
  }

  return auth;
};
