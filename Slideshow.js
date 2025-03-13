import React, { useState } from "react";

function Slides({ slides }) {
    const [index, setIndex] = useState(0);

    const handleRestart = () => setIndex(0);
    const handlePrev = () => setIndex((prev) => prev - 1);
    const handleNext = () => setIndex((prev) => prev + 1);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    onClick={handleRestart}
                    disabled={index === 0}
                    data-testid="button-restart"
                    className="small outlined"
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    disabled={index === 0}
                    className="small"
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    disabled={index === slides.length - 1}
                    className="small"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>

            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );
}

export default Slides;
