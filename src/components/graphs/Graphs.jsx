import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { tableData } from "../../data/dummyData";

export default function Graphs() {
	return (
		<div className="row gx-4 gy-6">
			<div className="col-lg-6">TOP 5 BEST PERFOMRING STORES</div>
			<div className="col-lg-6">TOP 5 LEAST PERFORMING</div>
			<div className="col-lg-6">REFERRALS BY MERCHANT AND DATE</div>
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							TOP PRODUCTS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
					<div className="p-2">
						<table className="table  ">
							<thead className="">
								<tr>
									<th scope="col">Merchant</th>
									<th scope="col">Store</th>
									<th scope="col">Channel</th>
									<th scope="col">Product</th>
								</tr>
							</thead>
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
		</div>
	);
}
