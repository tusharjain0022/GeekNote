import React from 'react';
import "./BlogFooter.css";

function BlogFooter() {
	return (
		<React.Fragment>
			<div className="outer_div">
				<div className="left_div">
					<div className="left_div_text_out">
						<h1 className="text_left_div_in" > Publish Your </h1>
						<h1 className="text_left_div_in"> Own Blog </h1>
						<h1 className="text_left_div_in"> with us. </h1>
					</div>
				</div>

				<div className="right_div">
					<div className="right_div_in">
						<p className="rd_text">Start Now</p>
						<div class="button_of_div_2">
							<button class="btn btn-link"><p style={{ color: "black" }}>Link</p></button>
							<button class="btn btn-link"><p style={{ color: "black" }}>Blogs</p></button>
							<button class="btn btn-link"><p style={{ color: "black" }}>Edit</p></button>
							<button class="btn btn-link"><p style={{ color: "black" }}>Dashboard</p></button>
						</div>

						<p className="rd_bottom">Register Now</p>
						<p className="rd_bottom_text">Already Registered ?<button class="btn btn-link"><p style={{ color: "black" }}>Login here</p></button></p>
						<p className="rd_bottom_most_text">Have any query ?<button class="btn btn-link"><p style={{ color: "black" }}>Contact Us</p></button></p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default BlogFooter;
