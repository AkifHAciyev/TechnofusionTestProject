import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
function Post() {
	const [showComment, setShowComment] = useState(); //useState for show Comment API
	const { id } = useParams(); //useParams for user id
	useEffect(() => {
		//data for comment
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then((response) => response.json())
			.then((json) => setShowComment(json));
	}, []);
	let styleDiv = {
		display: 'block',
		border: '1px solid rgb(155, 199, 113)',
		backgroundColor: 'rgb(19, 19, 16)',
		fontFamily: 'Times New Roman',
		margin: '10px 2px',
	};
	let displayBlock = {
		display: 'block',
		textAlign: 'left',
		margin: '0px 2px',
		padding: 9,
	};
	return showComment ? (
		<div>
			<article>
				<Link className="btn" to={'/'}>
					Back
				</Link>
			</article>
			<article style={displayBlock}>
				{showComment.map((comment) => (
					<div style={styleDiv} key={comment.id}>
						<p>
							<strong>Comment :</strong> {comment.body}
						</p>
					</div>
				))}
			</article>
		</div>
	) : (
		<p>
			<AiOutlineLoading3Quarters />
			Loading
		</p>
	);
}

export default Post;
