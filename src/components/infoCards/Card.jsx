import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";

// Define the Option and Required props
const propTypes = {
	className: PropTypes.string,
	cardTitle: PropTypes.string.isRequired,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export const Card = ({ className = "", children, cardTitle, onClick}) => {
    return (
        /* The overlay trigger wraps around the Tooltip and act as the Call out box when mouse hovers on the card. */
		<OverlayTrigger
			delay={{ hide: 100, show: 10 }}
			overlay={(props) => (
				<Tooltip {...props}>
					{`by following this link, you will be redirected to ${cardTitle}`}
				</Tooltip>
			)}
			placement="bottom"
        >
            {/* Render the card as a div with the icons and text as children. */}
			<div className={`${className} ${"info-box"}`} onClick={onClick}>{children}</div>
		</OverlayTrigger>
	);
};
// Bind the props to Card.
Card.propTypes = propTypes;
