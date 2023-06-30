import React from "react";

function Footer() {
	return (
		<>
			<footer className="text-center text-lg-start bg-black text-white">
				<section className="main-footerbody">
					<div className="container text-center text-md-start">
						<div className="row ">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase text-secondary fw-bold mb-4">
									ABC ORGANIZATION PVT LTD
								</h6>
								<p>
									Aggregator and marketplace, bringing together individual
									service providers in the live entertainment and compassion
									care space. Our business revolves around the retail of human
									time in predefined categories.
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase text-secondary fw-bold mb-4">
									Products
								</h6>
								<p>
									<a href="#!" className="text-reset">
										App
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Website
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Events
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Podcast
									</a>
								</p>
							</div>

							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase text-secondary fw-bold mb-4">
									Useful links
								</h6>
								<p>
									<a
										href="https://drive.google.com/file/d/1edcy3m37rIVPrz2ms1HlhaVyfWmPlo-p/view?usp=sharing"
										className="text-reset"
									>
										Terms & Conditions
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Help
									</a>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase text-secondary fw-bold mb-4">
									Contact
								</h6>
								<p>
									<i className="fas fa-home me-3 text-secondary"></i>303, 58
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									<p style={{ marginLeft: "36px" }}> Mumbai , IN</p>
								</p>
								<p>
									<i className="fas fa-envelope me-3 text-secondary"></i>
									connect@.com
								</p>
							</div>
						</div>
					</div>
				</section>

			
				
					<div >
						<span style={{display:'block',margin:'auto',textAlign:'center',}}>© 2023 Copyright : XYZ ORG ALL RIGHTS RESERVED.</span>
						
					</div>
					
			</footer>
		</>
	);
}

export default Footer;
