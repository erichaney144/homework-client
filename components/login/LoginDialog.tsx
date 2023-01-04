import { User } from '../../interfaces'

type Props = {
  user: User
  setUser: Function
}

const LoginDialog = ({ user, setUser }: Props) => {
  const login = () => {
    // TODO: issue POST request to server /login and interrogate isNthOrderDiscountAvailable
    const username = (document.getElementById("login-username") as HTMLInputElement).value
    if (username) {
      setUser({name: username})
    }
  }

  const form = [(
      <div className="modal-body text-center">
        <label className="m-2">
          <input type="text" id="login-username" name="username" placeholder='Username' className='form-control'></input>
        </label><br/>
        <label className="m-2">
          <input type="password" id="login-password" name="password" placeholder='Password' className='form-control'></input>
        </label>
      </div>),
      (
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={login}>Log In</button>
      </div>)
  ]

  const success = [(
      <div>
        <h3 className='text-success m-4 text-center'>Success!</h3>
      </div>
    ),
    (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    )
  ]

  return(
<div id="login-modal" className="modal fade" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Log In</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      { user?.name ? success : form }
    </div>
  </div>
</div>
  )
}

export default LoginDialog