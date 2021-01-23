import "./SearchStats.css";
import { Input } from "mdbreact";
import tagDetails from '../../../data/tag_details.json';
import { useState } from 'react';
import { InputGroup, Dropdown } from 'react-bootstrap';

function SearchStats({ transfer_data_tag }) {
	const [input, setInput] = useState('');

	return (
		<div className="container">
			<div className="row">
				<div className="SearchBar col-sm-12">
					<InputGroup className="mb-3">
						<Input className="bar-style"
							icon="search"
							value={input}
							onInput={
								(e) => {
									setInput(e.target.value);
									transfer_data_tag(e.target.value);
								}
							}
							placeHolder="Search: Title, Topic, Writer"
						/>
						<Dropdown>
							<Dropdown.Toggle variant="dark" id="dropdown-basic"></Dropdown.Toggle>
							<Dropdown.Menu>
								{
									tagDetails.map((tag_name) => {
										return <Dropdown.Item className="dropdown_item" onClick={
											(e) => {
												setInput(tag_name.tag);
												transfer_data_tag(tag_name.tag);
											}
										}>{tag_name.tag}</Dropdown.Item>
									})
								}
							</Dropdown.Menu>
						</Dropdown>
					</InputGroup>

				</div>
				<div className="for_tags col-sm-12">
					{
						tagDetails.map((tag_name) => {
							return <p className="render_tag">{tag_name.tag}</p>
						})
					}
				</div>
			</div>
		</div>
	);
}
export default SearchStats;
