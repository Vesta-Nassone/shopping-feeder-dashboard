import React from "react";
import { TableComponent } from "./TableComponent";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
} from "recharts";

export default function Graphs() {
	return (
		<div className="row gx-4 gy-4">
			{/* Start of 5 Best Performing Stores Section */}
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
			{/* End of 5 Best Performing Stores Section */}

			{/* Start of 5 Least Performing Stores Section */}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body d-flex justify-content-between">
						<h5 className="card-title">
							TOP 5 LEAST PERFORMING STORES
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
			{/* End of 5 Least Performing Stores Section. */}

			{/* Start of Referrals Section. */}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							REFERRALS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
				</div>
			</div>
			{/* End of Referrals Section */}

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
