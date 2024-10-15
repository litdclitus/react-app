import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Result
                status="403"
                title="Oops!"
                subTitle={<i>{error.statusText || error.message}</i>}
                extra={<Button
                    type="primary">
                    <Link to="/">Back to Dashboard</Link>
                </Button>}
            />
        </div>
    );
}