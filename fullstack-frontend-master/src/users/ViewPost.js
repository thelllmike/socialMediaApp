import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPost() {
  const [post, setPost] = useState({
    location: "",
    description: "",
    hashtag: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`);
    setPost(result.data);
  };

  return (
    <table class="table table-striped">
  <tr>
    <td style="font-weight:bold;">Hotel nam</td>
    <td>{post.location}</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">Address</td>
    <td>   {post.description}</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">Phone Nu</td>
    <td>{post.hashtag}</td>
  </tr>
  
  <tr class="profile-actions">
    <td><button><a href={"/edit/"+this.props.obj._id}>Edit</a></button></td>
    <td><button onclick={this.delete}>Delete Account</button></td>
  </tr>
</table>

  );
}
