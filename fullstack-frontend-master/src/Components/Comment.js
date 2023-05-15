import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState({
    comment: "",
   
  });

  const { comment } = post;

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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">ADD Comment</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="comment"
                name="comment"
                value={comment}
                onChange={(e) => onInputChange(e)}
              />
            </div>
         
          
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
