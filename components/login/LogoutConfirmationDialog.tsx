
const LogoutConfirmationDialog = () => {
  return(
<div id="logout-modal" className="modal fade" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Log Out</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div>
        <h3 className='text-success m-4 text-center'>You have been logged out.</h3>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default LogoutConfirmationDialog