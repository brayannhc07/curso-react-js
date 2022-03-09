import React from "react";
import posts from '../data/posts';
import { Navigate, useParams } from "react-router-dom";

const Post = () => {

	const { id } = useParams();
	console.log(id);

	return (
		<React.Fragment>
			{
				posts[id - 1] ?
					<div>
						<h1>{posts[id - 1].titulo}</h1>
						<p>{posts[id - 1].texto}</p>
					</div> :
					<Navigate replace to="/" />
			}
		</React.Fragment>
	);
}

export default Post;