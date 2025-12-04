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
		<div className="container mt-8">
				<Jumbotron/>
				
				<div className="row mt-4 mb-5">
					<div className="col-12 col-sm-6 col-md-3 mb-4">
						<Usercard/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4">
						<Usercard/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4">
						<Usercard/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4">
						<Usercard/>
					</div>
				</div>
			</div>
		</>
	);
};


export default Home;