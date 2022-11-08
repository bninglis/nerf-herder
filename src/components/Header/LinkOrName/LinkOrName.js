import "./LinkOrName.scss"
import { Link } from "react-router-dom";

export default function LinkOrName() {
    const username = localStorage.getItem("username");
    if (!username) {
        return <div>
            <Link to="/user">Login</Link>
        </div>
    } else {
        <div>
            <p>Welcome, {username}</p>
        </div>
    }
}