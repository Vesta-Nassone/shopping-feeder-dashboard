import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";

// Define the Option and Required props
const propTypes = {
	className: PropTypes.string,
	cardTitle: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export const Card = ({ className = "", children, cardTitle }) => {
	return (
		<OverlayTrigger
			delay={{ hide: 400, show: 300 }}
			overlay={(props) => (
				<Tooltip {...props}>
					{`by following this link, you will be redirected to ${cardTitle}`}
				</Tooltip>
			)}
			placement="bottom"
		>
			<div className={`${className} ${"info-box"}`}>{children}</div>
		</OverlayTrigger>
	);
};
Card.propTypes = propTypes;
