import React from "react";
import TopCardRows from "../components/infoCards/TopCardRows";
import Graphs from "../components/graphs/Graphs";

export default function Dashboard() {
    /* This Dashboard component will hold the TopRowCards, Graphs and Table */
	return (
		<div>
			<TopCardRows />
			<Graphs/>
		</div>
	);
}
