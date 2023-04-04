import React,{useState} from "react";

const DetailChange = () => {
let [passInfo, setPassInfo] = useState({
  oldPassword:"",
  newPassword:"",
  confirmNewPassword:""
})
  return (
    <div className="container my-5 text-center d-flex justify-content-center">
      <div className="col-md-5">
        <form>
          <div className="mb-md-5 mb-3">
            <input
              type="password"
              className="form-control style_input_field"
              id="exampleInputPassword1"
              placeholder="Current Password"
              
            />
          </div>
          <div className="mb-md-5 mb-3 ">
            <input
              type="password"
              className="form-control style_input_field"
              id="exampleInputPassword2"
              placeholder="New Password"
            />
          </div>
          <div className="mb-md-5 mb-3">
            <input
              type="password"
              className="form-control style_input_field"
              id="exampleInputPassword3"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="btn form-control btn-warning text-white"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailChange;
