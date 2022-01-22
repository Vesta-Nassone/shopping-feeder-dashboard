import React from "react";
import PropTypes from "prop-types";

// Define the Option and Required props
const propTypes = {
	className: PropTypes.string,
	cardTitle: PropTypes.string,
	children: PropTypes.node,
};

export const Card = ({ className = "", children, cardTitle }) => {
	return <div className={`${className} ${"info-box"}`}>{children}</div>;
};
Card.propTypes = propTypes;
