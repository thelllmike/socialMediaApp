import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/PostViewPage.css";
import postImage from "../images/sample-post-image.jpg";
// import postLogo from "../images/post-logo.jpg";
import ThemeToggle from "./Theme";
import Comment from "./Comment";

function PostViewPage() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  // let navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState({
    comment: "",
  });
  const { comment } = post;

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`);
    setPost(result.data);
  };

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:8080/posts");
    setPosts(result.data);
  };

  const deletepost = async (id) => {
    await axios.delete(`http://localhost:8080/post/${id}`);
    loadPosts();
  };

  const [liked, setliked] = useState(false);
  // const [showComment, setShowComment] = useState(false);

  //save icons to variables
  const fanormal = <i class="fa-regular fa-heart"></i>;
  const faliked = <i class="fa-solid fa-heart"></i>;

  //create on click event
  const handleClick = () => {
    setliked(!liked);
  };

  // const handleButtonClick = () => {
  // 	setShowComment(!showComment);
  //   }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/post/${id}`, post);
    navigate("/PostViewPage");
  };

  return (
    <div className="PostViewPage">
      <div className="header">
        <ThemeToggle />
      </div>

      {/* create table */}
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <tr className="personal-information">
                <td className="creator-profile-image">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"
                    alt=""
                    srcset=""
                  />
                </td>
                <td className="creator-name">
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                    {post.location}
                  </p>
                </td>
              </tr>
              <tr className="post-content">
                <td colSpan={2}>
                  <p>{post.description}</p>
                </td>
              </tr>
              <tr className="post-image">
                <td colSpan={2}>
                  <img src={postImage} alt="" />
                </td>
              </tr>
              <tr className="react-buttons">
                <td className="like-button" onClick={handleClick}>
                  {liked ? faliked : fanormal}
                </td>

                <td className="share-button">
                  <i class="fa-solid fa-share"></i>
                </td>
              </tr>
              <tr className="post-content">
                <td colSpan={2}>
                  <p>
                    {" "}
                    <a href="">{post.hashtag}</a>
                  </p>
                </td>
              </tr>
              <tr className="post-content">
                <td colSpan={2}>
                  <p>
                    {/* {post.description} */}
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Comment"
                      name="description"
                      value={post.comment}
                    />
                  </p>
                  {/* <td><Link
											className='btn btn-outline-primary mx-2'
											to={`/editpost/${post.id}`}>
											comment
										</Link></td>
										 */}
                </td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/Comment/${post.id}`}
                  >
                    comment
                  </Link>
                </td>
              </tr>

              {/* <tr className='post-content'>
				<td>
				<form onSubmit={(e) => onSubmit(e)}> 
				<div>
				
				<input
                type={"text"}
                className="form-control"
                placeholder="Comment"
                name="description"
			
                value={post.comment}
                onChange={(e) => onInputChange(e)}
              />
      
    </div>
	<button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

			</form>
			</td>
			</tr> */}

              {/* <tr className='post-content'>
  <td>
    <Comment
      comment={comment}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  </td>
</tr> */}

              <br />
              <br />

              <tr className="post-content">
                <td colSpan={2}>
                  <p>{post.post}</p>
                </td>
              </tr>

              <tr>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpost/${post.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletepost(post.id)}
                  >
                    Delete
                  </button>
                  <br />
                  <br /> <br />
                  <br />
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
