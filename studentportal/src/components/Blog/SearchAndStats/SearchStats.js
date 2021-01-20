import "./SearchStats.css";
import { Input } from "mdbreact";
import tagDetails from '../../../data/tag_details.json';
import { useState } from 'react';

function SearchStats() {
	const [input, setInput] = useState('');
	return (
		<div className="container">
			<div className="row">
				<div className="SearchBar col-sm-12">
					<Input className="bar-style"
						icon="search"
						value={input}
						onInput={e => setInput(e.target.value)}
						placeHolder="Search: Title, Topic, Writer"
					/>
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
