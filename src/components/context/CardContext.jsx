import React, { useState, createContext } from "react";

// @ts-ignore
export const CardContext = createContext();

/* The state of the stores and merchants will be managed here */
export const CardProvider = (props) => {
	const [merchants, setMerchants] = useState(2);
	const [stores, setStores] = useState(5);
	const [check, setCheck] = useState(false);
	// console.log(typeof randomize);

	return (
		// Wrap the ContextProvider around any child element.
		// This allows the props to be passed down easily.
		// And state can be managed from one central point.
		<CardContext.Provider
			value={[
				merchants,
				setMerchants,
				stores,
				setStores,
				check,
				setCheck,
			]}
		>
			{props.children}
		</CardContext.Provider>
	);
};
