import "./LinkOrName.scss";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function LinkOrName({ isVisible }) {
    const [cookies] = useCookies(["username"])
    const username = cookies.username
    if (!!isVisible) {
        if (!username) {
            return (
                <div className="drawer__contents">
                    <Link className="drawer__login" to="/user">
                        Login
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="drawer__contents">
                    <Link className="drawer__login" to="/user">
                        <p className="drawer__welcome">{username}</p>
                    </Link>
                </div>
            );
        }
    }
}
