export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-black text-white border-top border-secondary">
		<div className="container">
			<div className="row">

				<div className="col-12 col-md-4 mb-2 text-center">
					<h6 className="text-uppercase fw-bold mb-2 fs-6">Follow Star Wars</h6>
					<div className="d-flex justify-content-center">
						<i className="fa-brands fa-facebook me-2 fs-5"></i>
						<i className="fa-brands fa-instagram me-2 fs-5"></i>
						<i className="fa-brands fa-twitter me-2 fs-5"></i>
						<i className="fa-brands fa-youtube me-2 fs-5"></i>
						<i className="fa-brands fa-tiktok fs-5"></i>
					</div>
				</div>
				<div className="col-12 col-md-4 mb-2">
					<h6 className="text-uppercase fw-bold mb-2 fs-6">Site</h6>
					<div className="d-flex justify-content-center flex-wrap">
						<a href="#" className="text-white text-decoration-none me-3 small">About</a>
						<a href="#" className="text-white text-decoration-none me-3 small">Help</a>
						<a href="#" className="text-white text-decoration-none me-3 small">Terms</a>
						<a href="#" className="text-white text-decoration-none small">Privacy</a>
					</div>
				</div>
				<div className="col-12 col-md-4 mb-2">
					<h6 className="text-uppercase fw-bold mb-2 fs-6">More</h6>
					<div className="d-flex justify-content-center flex-wrap">
						<a href="#" className="text-white text-decoration-none me-3 small">Disney+</a>
						<a href="#" className="text-white text-decoration-none me-3 small">Games</a>
						<a href="#" className="text-white text-decoration-none me-3 small">Apps</a>
						<a href="#" className="text-white text-decoration-none small">Shop</a>
					</div>
				</div>
			</div>
			<hr className="my-2 border-secondary" />
			<div className="row">
				<div className="col-12">
					<p className="small text-white mb-1">
						TM & © Lucasfilm Ltd. All Rights Reserved -  Made <i className="fa fa-heart text-danger" /> By{" "}
						<a href="http://www.4geeksacademy.com" className="text-decoration-none text-primary">A 4Geeks Academy Student</a>
					</p>

				</div>
			</div>
		</div>
	</footer>
);