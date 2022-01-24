import React from "react";
import TopCardRows from "../components/infoCards/TopCardRows";
import Graphs from "../components/graphs/Graphs";
import { CardProvider } from "../components/CardContext";

export default function Dashboard() {
	/* 
		This Dashboard component will hold the TopRowCards, Graphs and Table.
		Wrap the CardProvider around the TopCardRows and Graph Components.
		This will allow props to be passed down from the Parent to the Child components.
		State will be managed from a central position.
	 */
	return (
		<CardProvider>
			<TopCardRows />
			<Graphs />
		</CardProvider>
	);
}
