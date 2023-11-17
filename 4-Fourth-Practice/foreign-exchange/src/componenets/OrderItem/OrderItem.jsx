// OrderItem component
import React from "react";
import "./OrderItem.css";

const OrderItem = ({ type, amount, price, maxTotal, prevTotal }) => {
    // Calculate the total value for the current order
    const total = amount + prevTotal;

    // Calculate the percentage for the background width
    const totalPercentage = (total / maxTotal) * 100;

    // Determine the gradient direction and color based on the order type
    const gradientDirection = type === "sell" ? "right" : "left";
    const gradientColor = type === "sell" ? "#ff3f34" : "#44bd32";

    // Inline styles for the order item
    const itemStyle = {
        background: `linear-gradient(to ${gradientDirection}, ${gradientColor} ${totalPercentage}%, white 0%)`,
        width: "70px",
        height: "40px",
    };

    // Determine the order of rendering based on the type
    const orderStyle = type === "sell" ? { order: 1 } : { order: -1 };

    return (
        <div style={{ ...itemStyle, ...orderStyle }} className="order-item mt-2">
            <div>{total}</div>
            <div>{amount}</div>
            <div className="percentage text-white">{price}</div>
        </div>
    );
};

export default OrderItem;
