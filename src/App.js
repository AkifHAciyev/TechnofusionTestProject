import './App.css';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Post from './Component/Post';
import { useState, useEffect } from 'react';
import Pagination from './Component/Pagination';
import axios from 'axios';
function App() {
	const [show, setShow] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setShow(res.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = show.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="App">
			<header className="App-header">
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<Home data={currentPosts} loading={loading} />
								<Pagination postsPerPage={postsPerPage} totalPosts={show.length} paginate={paginate} />
							</div>
						)}
					></Route>
					<Route path="/post/:id" render={() => <Post />}></Route>
				</Switch>
			</header>
		</div>
	);
}

export default App;
