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
				</div>
			</div>
		</div>
	);
}
