import React, { useContext, useEffect, useState, createContext } from "react";
import { RegisterReq, LoggedUserRes } from "types";
import { useError } from "./useError";
import { useCheckRes } from "./useCheckRes";
import { useNavigate } from "react-router";

interface AuthContextType {
  user: LoggedUserRes | null;
  signIn: (data: RegisterReq) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<LoggedUserRes | null>(null);
  const { dispatchError } = useError();
  const isResError = useCheckRes();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/user", {
          credentials: "include",
        });
        if (res.ok) {
          const resBody = (await res.json()) as LoggedUserRes;
          setUser(resBody);
        } else {
          setUser(null);
        }
      } catch (e) {
        console.log(e);
        dispatchError("Server is anavailable.");
      }
    })();
  }, []);

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
      const user = (await res.json()) as LoggedUserRes;
      if (isResError(res)) return;
      setUser(user);
      navigate("/");
    } catch (error) {
      dispatchError();
    }
  };

  const signOut = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/logout", {
        credentials: "include",
      });

      if (isResError(res)) return;
      setUser(null);
    } catch (error) {
      dispatchError();
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
