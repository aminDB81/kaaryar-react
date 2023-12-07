import Button, {VARIANTS, LOOKS, SIZES} from "../Buttons/Buttons";
import React, {Fragment} from "react";

const LinkButtons = () => {
    return (
        <>
            <Button as="a" href="https://www.google.com/" target="_blank" variant={VARIANTS.PRIMARY} look={LOOKS.FILLED}
                    size={SIZES.SMALL}>
                GOOGLE
            </Button>
            <Button as="a" href="https://www.google.com/" target="_blank" variant={VARIANTS.DANGER} look={LOOKS.FILLED}
                    size={SIZES.SMALL} disabled={true}>
                Disabled Button
            </Button>
            <Button as="a" href="https://www.google.com/" target="_blank" variant={VARIANTS.DANGER} look={LOOKS.WARNING}
                    size={SIZES.SMALL} disabled={true}>
                Disabled Outline Button
            </Button>
        </>
    )
}
export default LinkButtons