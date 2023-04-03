import React from "react";
import UserDetailsModel from "../EditModal/UserDetailsModel";

const AdminUserDetails = () => {
  return (
    <div className="container text-white my-5 text-center d-flex justify-content-center ">
      <div className="col-md-6">
        <table class="table text-white text-start">
          <tbody>
            <tr>
              <th scope="row">Name:</th>
              <td>Mark</td>
              <td>
                <i class="far fa-edit btn btn-outline-warning text-white"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td>@twitter@twitter@twitter</td>
              <td>
                <i class="far fa-edit btn btn-outline-warning text-white"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">Password:</th>
              <td>Jacob</td>
              <td>
                <UserDetailsModel></UserDetailsModel>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-warning text-white" disabled>
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminUserDetails;
