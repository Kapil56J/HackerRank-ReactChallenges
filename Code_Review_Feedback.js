import React, { useState } from "react";

const FeedbackCard = ({ title, index }) => {
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);

  const handleOnClickUpvote = () => {
    setUpvoteCount(upvoteCount + 1);
  }

  const handleOnClickDownvote = () => {
    setDownvoteCount(downvoteCount + 1);
  }

  return (
    <div className="pa-10 w-300 card">
      <h2>{title}</h2>
      <div className="flex my-30 mx-0 justify-content-around">
        <button
          className="py-10 px-15"
          data-testid={`upvote-btn-${index}`}
          onClick={handleOnClickUpvote}>
          👍 Upvote
        </button>
        <button
          className="py-10 px-15 danger"
          data-testid={`downvote-btn-${index}`}
          onClick={handleOnClickDownvote}>
          👎 Downvote
        </button>
      </div>
      <p
        className="my-10 mx-0"
        data-testid={`upvote-count-${index}`}>
        Upvotes: <strong>{upvoteCount}</strong>
      </p>
      <p
        className="my-10 mx-0"
        data-testid={`downvote-count-${index}`}>
        Downvotes: <strong>{downvoteCount}</strong>
      </p>
    </div>
  );
}


const FeedbackSystem = () => {
  const codeReviewAspects = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing"
  ];
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {codeReviewAspects.map(
          (title, index) => (
            <FeedbackCard
              title={title}
              key={index}
              index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default FeedbackSystem;
