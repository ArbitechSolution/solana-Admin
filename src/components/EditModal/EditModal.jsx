import React,{useState, useEffect} from 'react'
import Api from "../../config";
import {toast} from "react-toastify";
import jwt from 'jsonwebtoken'
import BorderColorIcon from '@mui/icons-material/BorderColor';
function EditModal({setDummy, dummy}) {
  
  let [userDetial, setUserDetail] = useState({
    fullName:"",
    email:""
  });
  const changePassword = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let { data } = await Api.post("admin/changeAdminDetails",
        { ...userDetial, user_id: tokendata.userId })
      toast.success(data.showableMessage)
      getDetial()
      setDummy(!dummy)
    } catch (error) {
      toast.error(error.response.data.showableMessage)
      console.error("error while update user history", error);
    }
  }
  

  const getDetial = async () => {
    try {
      let token = localStorage.getItem("token");
      if(token != null){
        let { userId} = jwt.decode(localStorage.token);
        let {data} = await Api.get(`admin/getAdminDetails/${userId}`);
        setUserDetail({
          fullName:data.data.admin.fullName,
          email:data.data.admin.email
        })
      }
    } catch (error) {
      console.error("error while get admin detail");
    }
  }
  useEffect(()=>{
    getDetial()
  },[])
  return (
    <div>
      <a data-bs-toggle="modal" href="#exampleModalToggle1" role="button">
        <i class="far fa-edit btn btn-outline-warning text-white"></i>
      </a>
      <div
        className="modal fade"
        id="exampleModalToggle1"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Change Details
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
                    type="text"
                    className="form-control style_input_field"
                    id="exampleInputPassword11"
                    placeholder="Name"
                    value={userDetial?.fullName}
                    onChange={(e) => { setUserDetail({ ...userDetial, fullName: e.target.value }) }}
                  />
                </div>
                <div className=" mb-3 ">
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputPassword122"
                    placeholder="email"
                    value={userDetial?.email}
                    onChange={(e) => { setUserDetail({ ...userDetial, email: e.target.value }) }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-warning text-white"
                data-bs-target="#exampleModalToggle1"
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

export default EditModal
