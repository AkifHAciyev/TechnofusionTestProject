import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserNinja } from 'react-icons/fa';
import Error from './Error';
import '../style.css';
function Home({ data }) {
	let history = useHistory();
	const [id, setId] = useState(0); //useState for input value
	const [error, setError] = useState(false); //useState for Error component
	const changId = (e) => {
		//input function
		setId(e.target.value);
		console.log(e.target.value);
	};

	let error01 = (e) => {
		//Error function
		e.preventDefault();
		if (id >= 1 && id <= 100) {
			history.push(`/post/${id}`);
		} else {
			setError(true);
		}
	};
	return (
		<div className="home">
			<h2>Start Page</h2>
			<form>
				<div className="div_input_form">
					<input type="number" onChange={changId} placeholder="Enter by Id" />
					<AiOutlineSearch />
				</div>
				<button className="btn_get_id" onClick={error01}>
					Get by Id
				</button>
			</form>
			{error && <Error />}
			{data &&
				data.map((user, i) => {
					return (
						<Link key={i} to={{ pathname: `/post/${user.id}` }}>
							<strong>
								<p
									style={{
										borderRadius: '7px',
										border: '2px solid antiquewhite',
									}}
								>
									<div className="title_home">
										<strong>
											{' '}
											<FaUserNinja /> {user.id}
										</strong>{' '}
										{user.title}
									</div>
								</p>
							</strong>
						</Link>
					);
				})}
		</div>
	);
}
export default Home;
