import { useContext, useState } from "react";
import { GameContext } from "../providers/GameProvider";
import { PlayerDataRes } from "types";
import { useNotification } from "./useNotification";
import { isResErrorMsg } from "../helpers/isErrorMsg";
import { NotificationMode } from "../components/notification/Notification";

const BASE_URL = "http://localhost:3001/api/game";

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
export interface UseGameFetchRes {
  player: PlayerDataRes | null;
  isLoading: boolean;
  callApi: CallApi;
}
type CallApi = <T>(
  restUrl?: string | null,
  options?: CallApiOptions<T>
) => Promise<void>;
interface CallApiOptions<T> {
  method?: HttpMethods;
  payload?: T;
}

export const useGameFetch = (): UseGameFetchRes => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setPlayer, player } = useContext(GameContext);
  const { dispatchNotification } = useNotification();

  const callApi: CallApi = async (restUrl, options) => {
    setIsLoading(true);

    const configWidouthPayload = {
      method: options?.method ?? HttpMethods.GET,
    };
    const config = options?.payload
      ? {
          ...configWidouthPayload,
          body: JSON.stringify(options.payload),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      : configWidouthPayload;
    try {
      const res = await fetch(`${BASE_URL}${restUrl ?? ""}`, {
        credentials: "include",
        ...config,
      });
      const errorMsg = await isResErrorMsg(res);
      if (!errorMsg) {
        const player = (await res.json()) as PlayerDataRes;
        setPlayer(player);
        setIsLoading(false);
      } else {
        setPlayer(null);
        setIsLoading(false);
        dispatchNotification(NotificationMode.ERROR, errorMsg);
      }
    } catch (e) {
      setIsLoading(false);
      dispatchNotification(NotificationMode.ERROR, null);
      setPlayer(null);
    }
  };

  return {
    player,
    isLoading,
    callApi,
  };
};
