
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams ,useNavigate } from "react-router-dom";
import "../Styles/PostViewPage.css";
import postImage from "../images/sample-post-image.jpg";
import postLogo from "../images/post-logo.jpg";
import ThemeToggle from "./Theme";
import Comment from "./Comment";


function PostViewPage() {
	const [posts, setPosts] = useState([]);
	// let navigate = useNavigate();
	const { id } = useParams();
  
	useEffect(() => {
	  loadPosts();
	}, []);

	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	await axios.put(`http://localhost:8080/post/${id}`, post);
	// 	navigate("/allpost");
	//   };
  
	const loadPosts = async () => {
	  const result = await axios.get("http://localhost:8080/posts");
	  setPosts(result.data);
	};
  
	const deletepost = async (id) => {
	  await axios.delete(`http://localhost:8080/post/${id}`);
	  loadPosts();
	};

	const [liked, setliked] = useState(false);
	const [showComment, setShowComment] = useState(false);

	//save icons to variables
	const fanormal = <i class='fa-regular fa-heart'></i>;
	const faliked = <i class='fa-solid fa-heart'></i>;

	//create on click event
	const handleClick = () => {
		setliked(!liked);
	};

	const handleButtonClick = () => {
		setShowComment(!showComment);
	  }
	

	return (
		<div className='PostViewPage'>
			<div className='header'>
				<ThemeToggle />
			</div>

			{/* create table */}
			<table>
			<thead>
						<tr>
							
						</tr>
					</thead>
					<tbody>
						{posts.map((post, index) => (
<tr>
<th scope='row' key={index}>
									{index + 1}
								</th>
				<tr className='personal-information'>
					<td className='creator-profile-image'>
						<img src={postLogo} alt='' srcset='' />
					</td>
					<td className='creator-name'>
						<p>{post.location}</p>
					</td>
				</tr>
				<tr className='post-content'>
					<td colSpan={2}>
						<p>
						{post.description}
						</p>
					</td>
				</tr>
				<tr className='post-image'>
					<td colSpan={2}>
						<img src={postImage} alt='' />
					</td>
				</tr>
				<tr className='react-buttons'>
					<td className='like-button' onClick={handleClick}>
						{liked ? faliked : fanormal}
					</td>

					<td className='comment-button'>
					<i className="fa-regular fa-comment" onClick={handleButtonClick}></i>
      {showComment && <Comment />}
					</td>
					<td className='share-button'>
						<i class='fa-solid fa-share'></i>
					</td>
				</tr>

				<tr className='comments-section' rowSpan={2}>
					<td className='comment-area'>
						<div className='comment'>
							<p> comment</p>
						</div>
					</td>
				</tr>
				<tr className='comments-section' rowSpan={2}>
					<td className='comment-area'>
						<div className='comment'>
							<p>comment</p>
						</div>
						<br/>
					</td>
				</tr>

				<tr>
									<td>
										
										<Link
											className='btn btn-outline-primary mx-2'
											to={`/editpost/${post.id}`}>
											Edit
										</Link>
										<button
											className='btn btn-danger mx-2'
											onClick={() => deletepost(post.id)}>
											Delete
										</button>
										<br/><br/>	<br/><br/>
									</td>
								</tr>

</tr>
				))}
				
					</tbody>
				
			</table>

		
		</div>
	);
}

export default PostViewPage;
