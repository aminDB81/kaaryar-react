import React, {Fragment} from "react";

import Button, {SIZES, LOOKS, VARIANTS} from "../Buttons/Buttons";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const RenderSizedButtons = () => {
    return (
        <>
            <Button variant={VARIANTS.PRIMARY} look={LOOKS.FILLED} size={SIZES.SMALL}>
                Small Button
            </Button>
            <Button variant={VARIANTS.PRIMARY} look={LOOKS.FILLED} size={SIZES.MEDIUM}>
                Medium Button
            </Button>
            <Button variant={VARIANTS.PRIMARY} look={LOOKS.FILLED} size={SIZES.LARGE}>
                Large Button
            </Button>
        </>
    )
}

export default RenderSizedButtons