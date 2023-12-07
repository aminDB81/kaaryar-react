import React from 'react';
import PropTypes from 'prop-types';
import "./Buttons.css"
import "../RenderNormalButtons/NormalButtons.css"
import "../RenderOutlineButtons/OutlineButtons.css"
import "../RenderSizedButtons/SizedButtons.css"
import "../LinkButtons/LinkButtons.css"

const VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    DARK: 'dark',
};

const SIZES = {
    SMALL: 'btn-sm',
    MEDIUM: 'btn-md',
    LARGE: 'btn-lg',
};

const LOOKS = {
    FILLED: 'filled',
    PRIMARY: 'btn-outline-primary',
    SECONDARY: 'btn-outline-secondary',
    SUCCESS: 'btn-outline-success',
    DANGER: 'btn-outline-danger',
    WARNING: 'btn-outline-warning',
    INFO: 'btn-outline-info',
    DARK: 'btn-outline-dark',
};

function Button({
                    as = 'button',
                    variant = "",
                    look = "filled",
                    size = "btn-sm",
                    disabled = false,
                    href,
                    type,
                    target,
                    children,
                    className,
                    onClick,
                }) {
    const Tag = as === 'a' ? 'a' : 'button';

    const buttonClass = `btn ${variant} ${look} ${size} ${disabled ? 'disabled' : ''} ${className || ''}`;

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
        } else if (onClick) {
            onClick(e);
        }
    };

    const buttonProps = {
        className: buttonClass,
        onClick: handleClick,
        disabled: disabled,
    };

    if (as === 'a') {
        buttonProps.href = href;
        buttonProps.target = target;
    } else {
        buttonProps.type = type;
    }

    return <Tag {...buttonProps}>{children}</Tag>;
}

Button.propTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    variant: PropTypes.oneOf(Object.values(VARIANTS)),
    look: PropTypes.oneOf(Object.values(LOOKS)),
    size: PropTypes.oneOf(Object.values(SIZES)),
    disabled: PropTypes.bool,
    href: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    target: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export { VARIANTS, SIZES, LOOKS };
export default Button;
