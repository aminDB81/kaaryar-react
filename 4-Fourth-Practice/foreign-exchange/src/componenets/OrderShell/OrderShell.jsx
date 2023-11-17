import "./OrderShell.css";
import {Fragment} from "react";
import Header from "../Header/Header";
import List from "../List/List";
import orders from "../../data/orders"
const OrderShell = () => {
    return (
        <>
            <section className="container">
                <div className="OrderShall-div">
                    <Header />
                    <List orders={orders} />
                </div>
            </section>
        </>
    )
}
export default OrderShell;