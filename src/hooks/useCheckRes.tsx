import { useError } from "./useError";
import { ErrorRes } from "types";

type IsResError = (res: Response, errorMesage?: string) => Promise<boolean>;

export const useCheckRes = () => {
  const { dispatchError } = useError();

  const isResError: IsResError = async (res, errorMessage) => {
    let isErr = false;
    if (!res.ok) {
      isErr = true;
      const errorRes: ErrorRes | null = await res.json();
      const apiMessage = errorRes?.message ?? null;
      const message = errorMessage ? errorMessage : apiMessage ?? null;

      switch (res.status) {
        case 400:
          dispatchError(apiMessage);
          break;
        case 401:
          dispatchError(message);
          break;
        case 403:
          dispatchError(apiMessage);
          break;
        default:
          dispatchError();
          break;
      }
    }

    return isErr;
  };
  return isResError;
};
