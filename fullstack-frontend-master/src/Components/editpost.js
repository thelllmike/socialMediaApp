import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ThemeToggle from "./Theme";
import "../Styles/Page.css";
export default function EditPost() {
  
	let navigate = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState({
    location: "",
    description: "",
    hashtag: "",
  });

  const { location, description, hashtag } = post;

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost();
  }, []);

   const onSubmit = async (e) => {
     e.preventDefault();
     await axios.put(`http://localhost:8080/post/${id}`, post);
 	navigate("/allpost");
   };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`);
    setPost(result.data);
  };

  return (
	<div className='Page'>
	<ThemeToggle />
	<div class='inFormBackground'>
		<div class='circle'></div>
		<div class='circle'></div>
		<div class='Form'>
		<form onSubmit={(e) => onSubmit(e)}>
				
				<div class='inputGroup'>
				<label htmlFor='username'>location</label>
					<input
						type='text'
						placeholder='Enter location'
						id='username'
						required
						value={location}
						onChange={(e) => onInputChange(e)}
					/>
				</div>
				<div class='inputGroup'>
				<label htmlFor='username'>Description</label>
					<input
						type='text'
						placeholder='Enter Post'
						id='username'
						required
						value={description}
						onChange={(e) => onInputChange(e)}
					/>
				</div>
				<div class='inputGroup'>
				<label htmlFor='username'>Hashtag</label>
					<input
						type='text'
						placeholder='Enter Hashtag'
						id='username'
						required
						value={hashtag}
                onChange={(e) => onInputChange(e)}
					/>
				</div>

				<button class='submit'>Post</button>
			
				
			</form>
		</div>
	</div>
</div>
  );
}
