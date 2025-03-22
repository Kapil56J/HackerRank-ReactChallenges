import Input from "./Home";
import PostDisplay from "./PostDisplay";
import React, {useState, useCallback} from "react";

function Home() {
    const [postList, setPostList] = useState([]);
    const [titleInput, setTitleInput] = useState('');
    const [descInput, setDescInput] = useState('');

    const createPost = useCallback(() => {
        if (titleInput && descInput) {
            setPostList(prev => [...prev, {title: titleInput, desc: descInput}]);
            setTitleInput('');
            setDescInput('');
        }
    }, [titleInput, descInput]);

    return (
        <div className="text-center ma-20">
            <div className="mb-20">
                <Input titleInput={titleInput} setTitleInput={setTitleInput} descInput={descInput} setDescInput={setDescInput} />
                <button data-testid="create-button" className="mt-10" onClick={createPost}>
                    Create Post
                </button>
            </div>
            <div className="posts-section">
                <PostDisplay postList={postList} setPostList={setPostList} />
            </div>
        </div>
    );
}

export default Home;
