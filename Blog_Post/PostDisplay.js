import React, { useCallback } from "react";

function PostDisplay({postList, setPostList}) {
    const deletePost = useCallback((idx) => {
        setPostList(prev => prev.filter((_, i) => i !== idx));
    }, []);
    return (
        <div data-testid="posts-container" className="flex wrap gap-10">
            { postList && postList.map((post, idx) => (
                <div className="post-box" key={idx}>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <button onClick={() => deletePost(idx)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PostDisplay;
