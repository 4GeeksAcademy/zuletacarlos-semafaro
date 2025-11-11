import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [active, setActive] = useState("");

	const handleClick = (color) => {
		setActive(color);
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
			<div className="traffic-top"></div>
			<div className="traffic-light d-flex flex-column align-items-center">
				<div
					className={`light red ${active === "red" ? "active" : ""}`}
					onClick={() => handleClick("red")}
				></div>
				<div
					className={`light yellow ${active === "yellow" ? "active" : ""}`}
					onClick={() => handleClick("yellow")}
				></div>
				<div
					className={`light green ${active === "green" ? "active" : ""}`}
					onClick={() => handleClick("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;

