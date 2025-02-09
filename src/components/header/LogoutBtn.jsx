import { useDispatch } from "react-redux"
import authService from "../../auth/auth"
import { logout } from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.LogOut().then( () => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn;