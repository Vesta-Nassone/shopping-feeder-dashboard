import React from "react";
import { tableData } from "../../data/dummyData";

export default function Graphs() {
	return (
		<div className="row gx-4 gy-6">
			<div className="col-lg-6">TOP 5 BEST PERFOMRING STORES</div>
			<div className="col-lg-6">TOP 5 LEAST PERFORMING</div>
			<div className="col-lg-6">REFERRALS BY MERCHANT AND DATE</div>
			{/* Start of the Table section.
			Responds well on medium screens and up.
			Overflows on xs and sm screens.
			TODO: Add media queries for xs and sm screen to make the table more responsive*/}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							TOP PRODUCTS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
					<div className="p-2">
						<table className="table  table-bordered table-hover responsive">
							{/* Table heading */}
							<thead className="thead-dark">
								<tr>
									<th scope="col">Merchant</th>
									<th scope="col">Store</th>
									<th scope="col">Channel</th>
									<th scope="col">Product</th>
								</tr>
							</thead>
							{/* Map the able data to the appropriate row and cols.
							Assign an id to each item for minimuz DOM updates. */}
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
						</table>
					</div>
				</div>
			</div>
			{/* End of Table */}
		</div>
	);
}
