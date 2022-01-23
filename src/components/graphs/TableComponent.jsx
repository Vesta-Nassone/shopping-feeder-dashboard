import React from "react";
import { Table } from "react-bootstrap";
import { tableData } from "../../data/dummyData";

export const TableComponent = () => {
	return (
		/*	Created a Seperate table component to make the app more compact.
			Responds well on all screen sizes.
			Replaced the table with the React-Bootstrap Table which is more responsive.
			Scrolls on xs and small screen unlike the html table which needed extra media queries.
		*/
		<Table responsive bordered hover>
			{/* Table Headings */}
			<thead className="thead-dark">
				<tr>
					<th scope="col">Merchant</th>
					<th scope="col">Store</th>
					<th scope="col">Channel</th>
					<th scope="col">Product</th>
				</tr>
			</thead>
			{/* Table body.
				Map the able data to the appropriate row and cols.
				Assign an id to each item for minimuz DOM updates. 
				TODO: Could add state to update the table in realtime,
				but this is working fine for now. */}
			<tbody>
				{tableData.map((item, id) => (
					<tr key={id}>
						<td>{item.name}</td>
						<td>{item.store}</td>
						<td>{item.channel}</td>
						<td>{item.product}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
