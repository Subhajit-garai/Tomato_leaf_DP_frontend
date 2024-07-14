import { updateHistory ,updatealldiseaseinfo} from "../../redux/Slices/appSlice.js";
import { setuserdata } from "../../redux/Slices/userSlice.js";
import { AsyncMiddwear } from "../AsyncMiddwear";


export const getUserData = async (dispatch) => {
    let url = "/api/v1/users/auth";
    AsyncMiddwear(url, dispatch, setuserdata);
}
export const getHistory = async (dispatch) => {
    let url = "/api/v1/services/history";
    AsyncMiddwear(url, dispatch, updateHistory);
}
export const getalldiseaseinfo = async (dispatch) => {
    let url = "/api/v1/services/alldiseaseinfo";
    AsyncMiddwear(url, dispatch, updatealldiseaseinfo);
}


// admine

