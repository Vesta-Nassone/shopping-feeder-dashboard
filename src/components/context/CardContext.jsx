import React, { useState, createContext } from "react";

// @ts-ignore
export const CardContext = createContext();

/* The state of the stores and merchants will be managed here */
export const CardProvider = (props) => {
	const [check, setCheck] = useState(false);
	console.log(typeof check);

	return (
		// Wrap the ContextProvider around any child element.
		// This allows the props to be passed down easily.
		// And state can be managed from one central point.
		<CardContext.Provider
			value={[
				check,
				setCheck,
			]}
		>
			{props.children}
		</CardContext.Provider>
	);
};
