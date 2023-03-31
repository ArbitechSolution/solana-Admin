import React from 'react'

import BorderColorIcon from '@mui/icons-material/BorderColor';
function EditModal() {
  return (
  <>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  {/* <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Status Action</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
      <div>
      <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="htmlForm-check-label" for="exampleRadios1">
   Deposite pending
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="htmlForm-check-label" for="exampleRadios2">
   LockedUp 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label className="htmlForm-check-label" for="exampleRadios3">
    Withdraw Available
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
  <label className="htmlForm-check-label" for="exampleRadios4">
    Withdraw Pending
  </label>
</div>
      </div>
      </div>
    <div className="d-flex justify-content-around mb-5 px-3" style={{gap:"12px"}}>
      <button className='btn btn-outline-success w-100'>Save</button>
      <button className='btn btn-danger w-100'>Cancal</button>
    </div>
    </div>
  </div>
</div>

<a className="btn btn-outline shadow-none" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><BorderColorIcon/></a> */}
  </>
  )
}

export default EditModal
