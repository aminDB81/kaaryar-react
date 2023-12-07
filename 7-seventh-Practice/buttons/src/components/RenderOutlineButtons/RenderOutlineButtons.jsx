import React, {Fragment} from "react";
import Button, {SIZES,LOOKS, VARIANTS} from "../Buttons/Buttons";
const RenderOutlineButtons = () => {
    return (
        <>
            <Button look={LOOKS.PRIMARY} size={SIZES.SMALL}>
                PRIMARY
            </Button>
            <Button look={LOOKS.SECONDARY} size={SIZES.SMALL}>
                SECONDARY
            </Button>
            <Button look={LOOKS.SUCCESS} size={SIZES.SMALL}>
                SUCCESS
            </Button>
            <Button look={LOOKS.DANGER} size={SIZES.SMALL}>
                DANGER
            </Button>
            <Button look={LOOKS.WARNING} size={SIZES.SMALL}>
                WARNING
            </Button>
            <Button look={LOOKS.INFO} size={SIZES.SMALL}>
                INFO
            </Button>
            <Button look={LOOKS.DARK} size={SIZES.SMALL}>
                DARK
            </Button>
        </>
    )
}

export default RenderOutlineButtons;