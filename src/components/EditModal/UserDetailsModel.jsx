import React, { useState } from "react";
import { toast } from "react-toastify"
import Api from '../../config'
import jwt from 'jsonwebtoken';
const UserDetailsModel = () => {
  let [passInfo, setPassInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })

  const changePassword = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let { data } = await Api.post("admin/changePassword",
        { ...passInfo, user_id: tokendata.userId })
      toast.success(data.showableMessage)
      setPassInfo({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      })
    } catch (error) {
      toast.error(error.response.data.showableMessage)
      console.error("error while update user history", error);
    }
  }
  return (
    <div>
      <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
        <i class="far fa-edit btn btn-outline-warning text-white"></i>
      </a>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Change Password
              </h5>
              <button
                type="button btn-warning"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className=" mb-3">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword1"
                    placeholder="Current Password"
                    onChange={(e) => { setPassInfo({ ...passInfo, oldPassword: e.target.value }) }}
                  />
                </div>
                <div className=" mb-3 ">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword12"
                    placeholder="New Password"
                    onChange={(e) => { setPassInfo({ ...passInfo, newPassword: e.target.value }) }}
                  />
                </div>
                <div className=" mb-3">
                  <input
                    type="password"
                    className="form-control style_input_field"
                    id="exampleInputPassword13"
                    placeholder="Confirm Password"
                    onChange={(e) => { setPassInfo({ ...passInfo, confirmNewPassword: e.target.value }) }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-warning text-white"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={changePassword}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModel;
