import React, { useState, createContext } from "react";

// @ts-ignore
export const CardContext = createContext();

/* The state of the stores and merchants will be managed here */
export const CardProvider = (props) => {
	// the check variable will toggle the original data and the randomized data.
	const [check, setCheck] = useState(false);
	// console.log(typeof check);

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
			{/* All children can receive props from the parent 
			hence all state at upper level can be passed down */}
			{props.children}
		</CardContext.Provider>
	);
};
