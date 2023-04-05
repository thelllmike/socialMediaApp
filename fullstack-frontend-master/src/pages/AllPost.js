import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:8080/posts");
    setPosts(result.data);
  };

  const deletepost = async (id) => {
    await axios.delete(`http://localhost:8080/post/${id}`);
    loadPosts();
  };
	return (
		<div className='container'>
			<div className='py-4'>
				<table className='table border shadow'>
					<thead>
						<tr>
							{/* <th scope="col">S.N</th>
              <th scope="col">location</th>
              <th scope="col">description</th>
              <th scope="col">hashtag</th>
              <th scope="col">Action</th> */}
						</tr>
					</thead>
					<tbody>
						{posts.map((post, index) => (
							<tr>
								<th scope='row' key={index}>
									{index + 1}
								</th>
								<tr>
									<td>{post.location}</td>
								</tr>
								<tr>
									<td>{post.description}</td>
								</tr>
								<tr>
									<td>{post.hashtag}</td>
								</tr>
								<tr>
									<td>
										<Link
											className='btn btn-primary mx-2'
											// eslint-disable-next-line no-undef
											to={`/viewPost/${post.id}`}>
											View
										</Link>
										<Link
											className='btn btn-outline-primary mx-2'
											to={`/editPost/${post.id}`}>
											Edit
										</Link>
										<button
											className='btn btn-danger mx-2'
											onClick={() => deletepost(post.id)}>
											Delete
										</button>
									</td>
								</tr>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}