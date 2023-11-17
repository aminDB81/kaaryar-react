import "./Header.css"
import {Fragment} from "react";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-3 justify-content-center align-items-center text-center">
                    <div className="col-6">
                        <h1 className="fw-bold">Sell</h1>
                    </div>
                    <div className="col-6">
                        <h1 className="fw-bold">Buy</h1>
                    </div>
                </div>
                <div className="mt-3 span-div d-flex justify-content-center align-items-center text-center">
                    <span className="fw-bolder first-span">Total</span>
                    <span className="fw-bolder secound-span">Amount</span>
                    <span className="fw-bolder third-span">PRICE(RIAL)</span>
                    <span className="fw-bolder fourth-span">Amount</span>
                    <span className="fw-bolder fifth-span">Total</span>
                </div>
            </div>
        </>
    )
}

export default Header;