import React from "react";

function Input({setTitleInput, titleInput, descInput, setDescInput}) {

    return (
        <div className="layout-column justify-content-center align-items-center">
            <input className="w-100" type="text" placeholder="Enter Title" value={titleInput} data-testid="title-input" onChange={(e) => setTitleInput(e.target.value)} />
            <textarea className="mt-10 w-100" placeholder="Enter Description" value={descInput} data-testid="description-input" onChange={(e) => setDescInput(e.target.value)} />
        </div>
    );
}

export default Input;
