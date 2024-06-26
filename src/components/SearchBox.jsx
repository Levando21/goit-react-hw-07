/** @format */
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/filtersSlice";

const SearchBox = () => {
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		dispatch(setFilter(evt.target.value));
	};

	return (
		<div>
			<label>
				Find contacts by name
				<input
					type="text"
					onChange={handleChange}
				/>
			</label>
		</div>
	);
};

export default SearchBox;
