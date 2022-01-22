import React from "react";
import "./TopCardRows.css";

export default function TopCardRows() {
	/* This component will be a Bootstrap grid, that will hold the Top 2 rows of cards. */
	return (
		<div className="row mx-n5 row-cols-1 row-cols-sm-2 row-cols-lg-5 pb-4 gy-4">
			<div className="col px-2">
				<div className="info-box">
					<span className="info-box-icon">
						<i className="bi bi-shop" />
					</span>
					<div className="info-box-text">
						<h6>40</h6>
						<p>Stores</p>
					</div>
				</div>
			</div>
		</div>
	);
}
