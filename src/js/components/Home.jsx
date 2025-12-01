import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Usercard from "./Usercard";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Usercard/>
		<Jumbotron/>
		</>
	);
};

export default Home;