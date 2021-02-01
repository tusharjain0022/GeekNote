import "./CRDetails.css";
import mail from "../../../images/mail.svg";
import github from "../../../images/GitHub_logo.svg";
import instagram from "../../../images/Instagram_logo.svg";
import linkedin from "../../../images/LinkedIn_logo.svg";
import developers from "./DevDetails";

function CRDetails(props) {
	return (
		<>
			<div className="outer_div">
				<div className="left_div">
					<div className="left_div_text_out">
						<h1 className="text_left_div_in"> This Section is  </h1>
						<h1 className="text_left_div_in"> Contributed By </h1>

					</div>
				</div>


				{developers.map((developer, idx) => {
					if (developer.branch === props.name) {
						return (
							<div className="right_div">
								<div className="right_div_in" >
									<span className="rd_text">{developer.name}</span>

									<div className="Links">
										<a href={developer.githubLink} className="mr-3">
											<img src={github} alt="github" />
										</a>
										<a href={developer.linkedinLink} className="mr-3">
											<img src={linkedin} alt="Dribbble" />
										</a>
										<a href={"mailto:" + developer.mail} className="mr-3">
											<img src={mail} alt="mail" />
										</a>
										<a href={developer.instaLink} className="mr-3">
											<img src={instagram} alt="instagram" />
										</a>
									</div>
									<p className="dev-intro"> {developer.intro}</p>
									
								</div>
							</div>
						);
					}
					})
				}

				

			</div>
		</>
	);
}
export default CRDetails;
