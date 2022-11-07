import "./LoginDisplay.scss";
import { useNavigate } from "react-router-dom";

export default function LoginDisplay({ loginDisplayToggle, setLoginDisplayToggle }) {
    const navigate = useNavigate();
    const handleGoToLogin = () => {
        navigate("/user");
    };
    const handleReturn = () => {
        setLoginDisplayToggle(!loginDisplayToggle);
    };
    if (!!loginDisplayToggle) {
        return (
            <div>
                <div>
                    <h3>You must either Login or Create an Account to continue</h3>
                    <h4>Would you like to do so now?</h4>
                    <button onClick={handleGoToLogin}>Yes</button>
                    <button onClick={handleReturn}>No</button>
                </div>
            </div>
        );
    }
}
