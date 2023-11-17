import React from "react";
import "./List.css";
import OrderItem from "../OrderItem/OrderItem";

const List = ({ orders = [] }) => {
    return (
        <div className="list-item mt-4">
            <div className="buy-item">{displayOrders("buy")}</div>
            <div className="sell-item">{displayOrders("sell")}</div>
        </div>
    );

    function displayOrders(type) {
        let total = 0;
        let maxTotal = orders
            .filter((o) => o.type === type)
            .reduce((acc, current) => acc + current.quantity, 0);

        return orders
            .filter((order) => order.type === type)
            .sort((a, b) => (type === "buy" ? b.price - a.price : a.price - b.price))
            .map((order) => {
                total += order.quantity;

                return (
                    <OrderItem
                        key={order.id} // Make sure to provide a unique key for each OrderItem
                        price={order.price}
                        amount={order.quantity}
                        type={order.type}
                        total={total}
                        maxTotal={maxTotal}
                        prevTotal={total - order.quantity} // Calculate the previous total for the current order
                    />
                );
            });
    }
};

export default List;
