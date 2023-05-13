import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../Styles/Comment.css'

function Comment() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState({
    comment: "",
    
  });

  const { comment} = post;

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/post/${id}`, post);
    navigate("/PostViewPage");
  };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`);
    setPost(result.data);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}> 
    <div>
        <textarea name="" id="" cols="30" rows="2"   value={comment}
                onChange={(e) => onInputChange(e)}></textarea>
    </div>
    <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
    </form>
  )
}

export default Comment