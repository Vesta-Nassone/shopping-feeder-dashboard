import React from "react";
import "./TopCardRows.css";

export default function TopCardRows() {
	return (
		<div className="row">
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
