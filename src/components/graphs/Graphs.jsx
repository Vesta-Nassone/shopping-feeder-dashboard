import React from "react";
import { TableComponent } from "./TableComponent";

export default function Graphs() {
	return (
		<div className="row gx-4 gy-6">
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body d-flex justify-content-between">
						<h5 className="card-title">
							TOP 5 BEST PERFORMING STORES
						</h5>
						<button
							type="button"
							className="btn btn-sm btn-outline-secondary disabled"
						>
							Return on Ad Spent
						</button>
					</div>
					<hr />
				</div>
			</div>
			<div className="col-lg-6">TOP 5 LEAST PERFORMING</div>
			<div className="col-lg-6">REFERRALS BY MERCHANT AND DATE</div>
			{/* Start of the Table section.
				Made the Table a seperate component.
			*/}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						{/* Card Title.
						TODO: Override the card margins, to remove the extra padding*/}
						<h5 className="card-title">
							TOP PRODUCTS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
					<div className="p-2">
						<TableComponent />
					</div>
				</div>
			</div>
			{/* End of Table */}
		</div>
	);
}
