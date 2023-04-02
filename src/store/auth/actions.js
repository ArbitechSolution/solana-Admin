import { ActionTypes } from "../types";
import Api from '../../config'
import {toast} from "react-toastify"
import {resolveAfter2Seconds} from '../../constant'
export const login = (data) => {
  return async (dispatch) => {
    try {
        let res = await Api.post("admin/login", data)
    localStorage.setItem("token", res.data.data.token)
        toast.success(res.data.showableMessage)
        await resolveAfter2Seconds(1500)
        window.location.href = "/MemberList";
        
    } catch (error) {
        toast.error(error.response.data.showableMessage)
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    let isAuthenticated = false;
    await dispatch({ type: ActionTypes.LOGOUT, payload: isAuthenticated });
  };
};
