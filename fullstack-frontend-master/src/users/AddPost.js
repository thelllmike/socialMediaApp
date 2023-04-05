import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPost() {
  let navigate = useNavigate();

  const [post, setPost] = useState({
    location: "",
    description: "",
    hashtag: "",
  });

  const { location, description, hashtag } = post;

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/post", post);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Post</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
               
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="What's happening?"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
            
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Hashtag"
                name="hashtag"
                value={hashtag}
                onChange={(e) => onInputChange(e)}
              />

            </div>
            <button type="submit" className="btn btn-outline-primary">
            Socialize
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
