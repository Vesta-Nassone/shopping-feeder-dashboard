import React from "react";
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

const bestPerformingStoresData = [
	{
		name: "Date A-B",
		s1: 25,
		s2: 40,
		s3: 15,
		s4: 41,
		s5: 37,
	},
	{
		name: "Date B-C",
		s1: 15,
		s2: 30,
		s3: 25,
		s4: 37,
		s5: 37,
	},
	{
		name: "Date C-D",
		s1: 99,
		s2: 22,
		s3: 10,
		s4: 80,
		s5: 84,
	},
	{
		name: "Date D-E",
		s1: 38,
		s2: 25,
		s3: 30,
		s4: 40,
		s5: 79,
	},
	{
		name: "Date E-F",
		s1: 35,
		s2: 22,
		s3: 55,
		s4: 76,
		s5: 60,
	},
	{
		name: "Date F-G",
		s1: 62,
		s2: 24,
		s3: 71,
		s4: 36,
		s5: 20,
	},
	{
		name: "Date G-H",
		s1: 40,
		s2: 35,
		s3: 51,
		s4: 38,
		s5: 49,
	},
];

const leastPerformingStoresData = [
	{
		name: "Date A-B",
		s1: 25,
		s2: 40,
		s3: 15,
		s4: 41,
		s5: 37,
	},
	{
		name: "Date B-C",
		s1: 15,
		s2: 30,
		s3: 25,
		s4: 37,
		s5: 37,
	},
	{
		name: "Date C-D",
		s1: 99,
		s2: 22,
		s3: 10,
		s4: 80,
		s5: 84,
	},
	{
		name: "Date D-E",
		s1: 38,
		s2: 25,
		s3: 30,
		s4: 40,
		s5: 79,
	},
	{
		name: "Date E-F",
		s1: 35,
		s2: 22,
		s3: 55,
		s4: 76,
		s5: 60,
	},
	{
		name: "Date F-G",
		s1: 62,
		s2: 24,
		s3: 71,
		s4: 36,
		s5: 20,
	},
	{
		name: "Date G-H",
		s1: 40,
		s2: 35,
		s3: 51,
		s4: 38,
		s5: 49,
	},
];

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
					<ResponsiveContainer width="100%" aspect={4 / 1}>
						<LineChart
							width={700}
							height={300}
							data={bestPerformingStoresData}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								name="store_1"
								type="monotone"
								dataKey="s1"
								stroke="#8f8bda"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_2"
								type="monotone"
								dataKey="s2"
								stroke="#82ca9d"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_3"
								type="monotone"
								dataKey="s3"
								stroke="#b8d9f7"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_4"
								type="monotone"
								dataKey="s4"
								stroke="#f6b339"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_5"
								type="monotone"
								dataKey="s5"
								stroke="#90ab9f"
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
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
					<ResponsiveContainer width="100%" aspect={4 / 1}>
						<LineChart
							width={700}
							height={300}
							data={leastPerformingStoresData}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								name="store_1"
								type="monotone"
								dataKey="s1"
								stroke="#8f8bda"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_2"
								type="monotone"
								dataKey="s2"
								stroke="#82ca9d"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_3"
								type="monotone"
								dataKey="s3"
								stroke="#b8d9f7"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_4"
								type="monotone"
								dataKey="s4"
								stroke="#f6b339"
								activeDot={{ r: 8 }}
							/>
							<Line
								name="store_5"
								type="monotone"
								dataKey="s5"
								stroke="#90ab9f"
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
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
