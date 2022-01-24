import React, { useContext } from "react";
import { TableComponent } from "./TableComponent";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import {
	bestPerformingStoresData,
	leastPerformingStoresData,
	referralsData,
} from "../../data/dummyData";
import { CardContext } from "../context/CardContext";


// Holds the colors of the graphs to be dynamically allocated.
const color = ["#8f8bda", "#82ca9d", "#b8d9f7", "#f6b339", "#90ab9f"];


/* 
	This method will dynamically create Line Charts so I don't have to hard code them.
 */
const createLineCharts = (dataSource) => {
	// get the keys from the data source
	const keysArray = Object.keys(dataSource[0]).slice(1);
	// console.log(keysArray)

	// This will allow me to get around the Merchant Referrals graph having only 2 items.
	let isMerchantOrStore = Object.keys(dataSource[0]);
	// console.log(typeof(isMerchantOrStore[1]))

	const lineArray = [];
	// Use the Keys to Map the data to the Line Graph and store them.
	keysArray.forEach((item, index) => {
		lineArray.push(
			<Line
				key={index}
				name={
					isMerchantOrStore[1] === "m1"
						? `merchant_${index + 1}`
						: `store_${index + 1}`
				}
				type="monotone"
				dataKey={item}
				stroke={color[index]}
				activeDot={{ r: 8 }}
			/>
		);
	});
	// console.log(lineArray)
	return lineArray;
};

/* Generate the random data to be displayed on toggle.
The generated values are random, to gain insight on the graphs some indepth analysis would be required.
*/
let randomizedBest = [];
let randomizedLeast = [];
let randomizedRef = [];
for (let i = 0; i < 7; i++) {
	// generate a random number between 150 and 0 for best performing stores
	// Add it to the best object
	//  the d value is  to get around the off by one error, caused by the createrando
	let best = {
		s1: Math.floor(Math.random() * (150 - 0 + 1) + 0),
		s2: Math.floor(Math.random() * (150 - 0 + 1) + 0),
		s3: Math.floor(Math.random() * (150 - 0 + 1) + 0),
		s4: Math.floor(Math.random() * (150 - 0 + 1) + 0),
		s5: Math.floor(Math.random() * (150 - 0 + 1) + 0),
	};
	//  generate a number between 100 and 0 for least performing stores
	// Add it to the least object
	let least = {
		s1: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		s2: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		s3: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		s4: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		s5: Math.floor(Math.random() * (100 - 0 + 1) + 0),
	};
	//  generate a number between 100 and 0 for referrals by merchant
	// Add it to the ref object
	let ref = {
		m1: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		m2: Math.floor(Math.random() * (100 - 0 + 1) + 0),
	};
	randomizedBest.push(best);
	randomizedLeast.push(least);
	randomizedRef.push(ref);
}

// console.log(bestPerformingStoresData);
// console.log(randomizedBest.keys());
/* End of random data Generator */

const createRandomCharts = (dataSource) => {
	// get the keys from the data source
	const keysArray = Object.keys(dataSource[0]).slice(0);
	// get the value from the data source
	const valueArray = Object.values(dataSource[0]).slice(0);
	// console.log(keysArray)
	// console.log(valueArray)
	// This will allow me to get around the Merchant Referrals graph having only 2 items.
	let isMerchantOrStore = Object.keys(dataSource[0]);
	// console.log(typeof(isMerchantOrStore[1]))

	// Randomize the valuesArray and store them in randomArray.
	const randomArray = valueArray.map(
		(item) => item * 0 + Math.floor(Math.random() * (150 - 0 + 1) + 0)
	);
	// console.log(randomArray)
	const result = [];
	for (let index = 0; index < keysArray.length; ++index) {
		result[keysArray[index]] = randomArray[index];
	}
	// console.log(Object.keys(result))
	const randomizedKeys = Object.keys(result);

	const lineArray = [];
	// Use the Keys to Map the data to the Line Graph and store them.
	randomizedKeys.forEach((item, index) => {
		// console.log(`item is ${item} \n index is ${index}`)
		lineArray.push(
			<Line
				key={index}
				name={
					isMerchantOrStore[1] === "m1"
						? `merchant_${index + 1}`
						: `store_${index + 1}`
				}
				type="monotone"
				dataKey={item}
				stroke={color[index]}
				activeDot={{ r: 8 }}
			/>
		);
	});
	// console.log(lineArray)
	return lineArray;
};


export default function Graphs() {
	/* use the check toggle to control the data that will be displayed */
	const [check] = useContext(CardContext);
	// console.log(typeof (check));
	// console.log(check)
	return (
		<div className="row gx-4 gy-4">
			{/* Start of 5 Best Performing Stores Section */}
			<div className="col-lg-6">
				<div className="card">
					<div
						className="card-body d-flex justify-content-between"
						style={{ paddingBottom: "2px" }}
					>
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
					{/* The ResponsiveContainer will ensure the graphs don't overflow the container.*/}
					{/* Render the Top 5 Best Performing Graphs Dynamically. */}
					<ResponsiveContainer width="100%" aspect={4 / 1}>
						{/* height={200}*/}
						<LineChart
							data={check ? randomizedBest : bestPerformingStoresData}
							margin={{
								top: 5,
								right: 20,
								left: 0,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis
								dataKey={
									Object.keys(bestPerformingStoresData[0])[0]
								}
							/>
							<YAxis />
							<Tooltip />
							<Legend />
							{/* wrapperStyle={{ position: 'relative' }} */}
							{/* createRandomCharts(randomizedBest) */}
							{check
								? createRandomCharts(randomizedBest)
								: createLineCharts(bestPerformingStoresData)}
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			{/* End of 5 Best Performing Stores Section */}

			{/* Start of 5 Least Performing Stores Section */}
			{/* Render the Top 5 Least Performing Graphs Dynamically. */}
			<div className="col-lg-6">
				<div className="card">
					<div
						className="card-body d-flex justify-content-between"
						style={{ paddingBottom: "2px" }}
					>
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
					<ResponsiveContainer width="100%" aspect={4 / 1}>
						<LineChart
							data={check ? randomizedLeast : leastPerformingStoresData}
							margin={{
								top: 5,
								right: 20,
								left: 0,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis
								dataKey={
									Object.keys(leastPerformingStoresData[0])[0]
								}
							/>
							<YAxis />
							<Tooltip />
							<Legend />
							{check
								? createRandomCharts(randomizedLeast)
								: createLineCharts(leastPerformingStoresData)}
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			{/* End of 5 Least Performing Stores Section. */}

			{/* Start of Referrals Section. */}
			{/* Render the Referrals By Merchant Graphs Dynamically. */}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body" style={{ paddingBottom: "2px" }}>
						<h5 className="card-title">
							REFERRALS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
					<ResponsiveContainer width="100%" aspect={4 / 1}>
						<LineChart
							data={check ? randomizedRef : referralsData}
							margin={{
								top: 5,
								right: 20,
								left: 0,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey={Object.keys(referralsData[0])[0]} />
							<YAxis />
							<Tooltip />
							<Legend />
							{check
								? createRandomCharts(randomizedRef)
								: createLineCharts(referralsData)}
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			{/* End of Referrals Section */}

			{/* Start of the Table section.
				Made the Table a seperate component.
			*/}
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body" style={{ paddingBottom: "2px" }}>
						{/* 
							Card Title.
							TODO: Override the card margins, to remove the extra padding
						*/}
						<h5 className="card-title">
							TOP PRODUCTS BY MERCHANT AND DATE
						</h5>
					</div>
					<hr />
					{/* Render the Table component here */}
					<div className="p-2">
						<TableComponent />
					</div>
				</div>
			</div>
			{/* End of Table */}
		</div>
	);
}
