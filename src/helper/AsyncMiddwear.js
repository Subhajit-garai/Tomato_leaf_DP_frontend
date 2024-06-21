import { SurverRequest } from "./SurverRequest";
import { toast } from "react-toastify";

export const AsyncMiddwear = async (url, dispatch, next) => {
    const response = await SurverRequest("GET", url);

    response.success ? dispatch(next(response))
        : toast.error(response.message);
}