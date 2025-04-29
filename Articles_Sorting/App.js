import "h8k-components";
import {useState} from 'react'
import Articles from "./components/Articles";
import "./App.css";

function App({ articles }) {
    const [orderedBy, setOrderedBy] = useState('upvotes')

    if(orderedBy == 'recent') {
        articles.sort((a,b) =>
            new Date(b.date) - new Date(a.date))
    }

    if(orderedBy == 'upvotes') {
        articles.sort((a,b) =>
            new Date(b.upvotes) - new Date(a.upvotes))
    }

    const handleMostUpvoted = () => setOrderedBy('upvotes');
    const handleMostRecent = () => setOrderedBy('recent');

    return (
        <>
            <h8k-navbar
                header="Sorting Articles">
            </h8k-navbar>

            <div className="App">
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">
                        Sort By
                    </label>

                    <button
                        data-testid="most-upvoted-link"
                        className="small"
                        onClick={handleMostUpvoted}
                    >
                        Most Upvoted
                    </button>

                    <button
                        data-testid="most-recent-link"
                        className="small"
                        onClick={handleMostRecent}
                    >
                        Most Recent
                    </button>

                </div>
                <Articles articles={articles} />
            </div>
        </>
    );
}

export default App;
