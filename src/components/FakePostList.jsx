import React, { useState, useEffect } from "react";
import axios from "axios";

function FakePostList() {

const [posts, setPosts] = useState([]);

const loadPosts = () => {
axios.get("https://dummyjson.com/posts")
.then((response) => {
setPosts(response.data.posts);
});
};

useEffect(() => {
loadPosts();
}, []);

return (
<div>

<h2>Fake API Posts</h2>

<button onClick={loadPosts}>Refresh</button>

{posts.slice(0,5).map((post) => (
<div key={post.id}>
<h4>{post.title}</h4>
<p>{post.body}</p>
</div>
))}

</div>
);
}

export default FakePostList;