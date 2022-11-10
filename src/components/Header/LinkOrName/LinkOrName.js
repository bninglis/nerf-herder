import "./LinkOrName.scss";
import { Link } from "react-router-dom";

export default function LinkOrName({ isVisible }) {
    const username = localStorage.getItem("username");
    if (!!isVisible) {
        console.log(true);
        if (!username) {
            console.log("no user");
            return (
                <div className="drawer__contents">
                    <Link className="drawer__login" to="/user">
                        Login
                    </Link>
                </div>
            );
        } else {
            console.log("welcome");
            return (
                <div className="drawer__contents">
                    <p className="drawer__welcome">Welcome, {username}</p>
                </div>
            );
        }
    }
}
