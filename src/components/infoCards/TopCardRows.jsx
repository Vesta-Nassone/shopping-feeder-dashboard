import React, { useContext, useState } from "react";
import { Card } from "./Card";
import "./TopCardRows.css";
import { CardContext } from "../context/CardContext";

export default function TopCardRows() {
	// Keep the state of merchants and stores here
	const [merchants, setMerchants] = useState(2);
	const [stores, setStores] = useState(5);

	// get the state from Context.
	// This will allow the check variable to be passed to Graph for randomizing the data.
	const [check, setCheck] = useContext(CardContext);

	// Increment the store and merchant count when Button is clicked.
	function increment() {
		setStores((prevStore) => prevStore + 1);
		setMerchants((prevMerchants) => prevMerchants + 1);
	}
	
	// Resets the count to original when Add New Merchant is toggled.
	function resetCount() {
		setStores(5)
		setMerchants(2)
	}


	/* This component will be a Bootstrap grid, that will hold the Top 2 rows of cards. 
    Grid is responsive, 1column for xs screens, 2columns for sm to mid and 5cols for lg and above.
	Some of the data values are hard coded but thats alright for the scope of this project.
    */
	return (
		<div className="row mx-n5 row-cols-1 row-cols-sm-2 row-cols-lg-5 pb-4 gy-4">
			{/* Start of first row */}
			<div className="col px-2">
				<Card cardTitle="Merchants">
					<span className="info-box-icon">
						<i className="bi bi-people" />
					</span>
					<div className="info-box-text">
						<h6>{merchants}</h6>
						<p>Merchants</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Stores">
					<span className="info-box-icon">
						<i className="bi bi-shop" />
					</span>
					<div className="info-box-text">
						<h6>{stores}</h6>
						<p>Stores</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Stores with product errors">
					<span className="info-box-icon">
						<i className="bi bi-exclamation-triangle" />
					</span>
					<div className="info-box-text">
						<h6>5</h6>
						<p>Stores with Product Errors</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Referrals" className="alt-box-color">
					<span className="info-box-icon alt-icon-color">
						<i className="bi bi-graph-up-arrow" />
					</span>
					<div className="info-box-text">
						<h6>15</h6>
						<p>Total Referrals Today</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Sales" className="alt-box-color">
					<span className="info-box-icon alt-icon-color">
						<i className="bi bi-cart3" />
					</span>
					<div className="info-box-text">
						<h6>500</h6>
						<p>Total Sales Today</p>
					</div>
				</Card>
			</div>
			{/* End of first row */}

			{/* Start of Second row */}
			<div className="col px-2">
				<Card cardTitle="Add New Merchant" onClick={(() => {
					setCheck(!check);
					check ? resetCount() : increment();
				})}>
					<span className="info-box-icon">
						<i className="bi bi-plus" />
					</span>
					<div className="info-box-text center">
						<p>Add New Merchant</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Reassign Merchants">
					<span className="info-box-icon">
						<i className="bi bi-person-badge" />
					</span>
					<div className="info-box-text center">
						<p>Reassign Merchant</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Add New Store">
					<span className="info-box-icon">
						<i className="bi bi-cart-plus" />
					</span>
					<div className="info-box-text center">
						<p>Add New Store</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Card 4" className="alt-box-color">
					<span className="info-box-icon alt-icon-color">
						<i className="bi bi-bar-chart-fill" />
					</span>
					<div className="info-box-text">
						<h6>300</h6>
						<p>Card 4</p>
					</div>
				</Card>
			</div>
			<div className="col px-2">
				<Card cardTitle="Card 5" className="alt-box-color">
					<span className="info-box-icon alt-icon-color">
						<i className="bi bi-bar-chart-fill" />
					</span>
					<div className="info-box-text">
						<h6>400</h6>
						<p>Card 5</p>
					</div>
				</Card>
			</div>
			{/* End of second row */}
		</div>
	);
}
