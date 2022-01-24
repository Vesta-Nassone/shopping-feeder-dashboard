import React, { useState, createContext } from "react";

// @ts-ignore
export const CardContext = createContext();

export const CardProvider = props => {
	const [merchants, setMerchants] = useState(2);
	const [stores, setStores] = useState(5);

	return <CardContext.Provider value={[merchants, setMerchants, stores, setStores]}>{props.children}</CardContext.Provider>;
};
