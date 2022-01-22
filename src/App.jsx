import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		/* The App component will hold the Dashboard, which contains the Cards, Tables and Graphs. */
		<div className="wrapper">
			<Dashboard />
		</div>
	);
}

export default App;
