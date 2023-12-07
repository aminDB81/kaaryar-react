import Button, {VARIANTS, LOOKS, SIZES} from "../Buttons/Buttons";
import React, {Fragment} from "react";

const RenderNormalButtons = () => {
    return (
        <>
            <Button type="button" variant={VARIANTS.PRIMARY} look={LOOKS.FILLED} size={SIZES.SMALL}>
                PRIMARY
            </Button>
            <Button type="button" variant={VARIANTS.SECONDARY} look={LOOKS.FILLED} size={SIZES.SMALL}>
                SECONDARY
            </Button>
            <Button type="submit" variant={VARIANTS.SUCCESS} look={LOOKS.FILLED} size={SIZES.SMALL}>
                SUCCESS
            </Button>
            <Button variant={VARIANTS.DANGER} look={LOOKS.FILLED} size={SIZES.SMALL}>
                DANGER
            </Button>
            <Button variant={VARIANTS.WARNING} look={LOOKS.FILLED} size={SIZES.SMALL}>
                WARNING
            </Button>
            <Button variant={VARIANTS.INFO} look={LOOKS.FILLED} size={SIZES.SMALL}>
                INFO
            </Button>
            <Button variant={VARIANTS.DARK} look={LOOKS.FILLED} size={SIZES.SMALL}>
                DARK
            </Button>
        </>
    )
}
export default RenderNormalButtons