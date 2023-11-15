import {Fragment} from "react";
import "./Action.css"
const Action = () => {
    return (
        <>
            <div className="input-group position-absolute main-Action-div">
                <input type="text" className="form-control rounded" placeholder="پیام خود را اینجا بنویسید ..."
                       aria-describedby="basic-addon1"/>
                <button type="button" className="btn btn-light mx-1 rounded">ارسال</button>
            </div>
        </>
    )
}
export default Action;