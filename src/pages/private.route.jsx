import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Result, Button } from "antd";
import { Link, Navigate } from "react-router-dom";


const PrivateRoute = (props) => {

    const { userLogin } = useContext(AuthContext);
    if (userLogin && userLogin.id) {
        return (
            <>
                {props.children}
            </>
        )
    }

    return (
        // <Navigate to="/login" replace />
        <Result
            status="403"
            title="Oops!"
            subTitle={"Authorization required."}
            extra={<>
                <Button type="primary">
                    <Link to="/">Back to Dashboard</Link>
                </Button>
                <span>or</span>
                <Link to="/login">Log in</Link>
            </>
            }


        />
    )
}

export default PrivateRoute;