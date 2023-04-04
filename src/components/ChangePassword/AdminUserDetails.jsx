import React, { useEffect, useState } from "react";
import UserDetailsModel from "../EditModal/UserDetailsModel";
import EditModal from '../EditModal/EditModal'
import jwt from "jsonwebtoken"
import Api from "../../config"
const AdminUserDetails = () => {
  let [userDetial, setUserDetail] = useState({});
  let [dummy, setDummy]=useState(true)
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
  },[dummy])
  return (
    <div className="container text-white my-5 text-center d-flex justify-content-center ">
      <div className="col-md-6">
        <table class="table text-white ">
          <tbody>
            <tr className="text-start">
              <th scope="row">Name:</th>
              <td>{userDetial?.fullName}</td>
              {/* <td>
                <i class="far fa-edit btn btn-outline-warning text-white"></i>
              </td> */}
            </tr>
            <tr className="text-start ">
              <th scope="row">Email:</th>
              <td>{userDetial?.email}</td>
              {/* <td>
                <i class="far fa-edit btn btn-outline-warning text-white"></i>
              </td> */}
            </tr>
            <tr >
              {/* <th scope="row">Password:</th> */}
              <th className="text-start ">Update Password </th>
              <td className="text-end ">
              <UserDetailsModel/>
              </td>
            </tr>
            <tr >
              {/* <th scope="row">Password:</th> */}
              <th className="text-start ">Update Detail </th>
              <td className="text-end ">
                <EditModal dummy={dummy} setDummy={setDummy}/>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <button className="btn btn-warning text-white" disabled>
          Update
        </button> */}
      </div>
    </div>
  );
};

export default AdminUserDetails;
