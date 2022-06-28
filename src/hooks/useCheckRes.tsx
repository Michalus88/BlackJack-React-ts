import { UseFormSetError } from "react-hook-form";
import { useError } from "./useError";

export const useCheckRes = () => {
  const { dispatchError } = useError();

  const isResError = (res: Response, setErr?: UseFormSetError<any>) => {
    let isErr = false;
    if (!res.ok) {
      isErr = true;
      switch (res.status) {
        case 400:
          dispatchError("Check the input data");
          return true;
        case 409:
          setErr
            ? setErr("email", {
                type: "emil's availability",
                message: "email is alredy registered",
              })
            : dispatchError("email is alredy registered");
          return true;
        default:
          dispatchError();
          return true;
      }
    }

    return isErr;
  };
  return isResError;
};
