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
			<div className="col px-2">
				<div className="info-box">
					<span className="info-box-icon">
						<i className="bi bi-exclamation-triangle" />
					</span>
					<div className="info-box-text">
						<h6>5</h6>
						<p>Stores with Product Errors</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div
					className="info-box"
					style={{ backgroundColor: "rgb(139,195,74)" }}
				>
					<span
						className="info-box-icon"
						style={{ backgroundColor: "rgb(122,171,65)" }}
					>
						<i className="bi bi-graph-up-arrow" />
					</span>
					<div className="info-box-text">
						<h6>15</h6>
						<p>Total Referrals Today</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div
					className="info-box"
					style={{ backgroundColor: "rgb(139,195,74)" }}
				>
					<span
						className="info-box-icon"
						style={{ backgroundColor: "rgb(122,171,65)" }}
					>
						<i className="bi bi-cart3" />
					</span>
					<div className="info-box-text">
						<h6>500</h6>
						<p>Total Sales Today</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div className="info-box">
					<span className="info-box-icon">
						<i className="bi bi-plus" />
					</span>
					<div className="info-box-text center">
						<p>Add New Merchant</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div className="info-box">
					<span className="info-box-icon">
						<i className="bi bi-person-badge" />
					</span>
					<div className="info-box-text center">
						<p>Reassign Merchant</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div className="info-box">
					<span className="info-box-icon">
						<i className="bi bi-cart-plus" />
					</span>
					<div className="info-box-text center">
						<p>Add New Store</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div
					className="info-box"
					style={{ backgroundColor: "rgb(139,195,74)" }}
				>
					<span
						className="info-box-icon"
						style={{ backgroundColor: "rgb(122,171,65)" }}
					>
						<i className="bi bi-bar-chart-fill" />
					</span>
					<div className="info-box-text">
						<h6>300</h6>
						<p>Card 4</p>
					</div>
				</div>
			</div>
			<div className="col px-2">
				<div
					className="info-box"
					style={{ backgroundColor: "rgb(139,195,74)" }}
				>
					<span
						className="info-box-icon"
						style={{ backgroundColor: "rgb(122,171,65)" }}
					>
						<i className="bi bi-bar-chart-fill" />
					</span>
					<div className="info-box-text">
						<h6>400</h6>
						<p>Card 5</p>
					</div>
				</div>
			</div>
		</div>
	);
}
