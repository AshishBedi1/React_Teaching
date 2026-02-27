import React, { useState } from "react";

const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !message) {
            alert("Please fill in all fields");
            return;
        }
        setSubmitted(true);
    }

    const handleReset = () => {
        setName("");
        setMessage("");
        setSubmitted(false);
    }

    if(submitted) {
        return(
            <div>
                <h3>thankyou , {name}</h3>
                <p>feedback: {message}</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        )
    }


    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
                <input
                    type="text"
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />

            </div>

            <div>
                <textarea
                    placeholder="Your Feedback"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <button style={{ marginTop: "10px" }} type="submit">
                Submit
            </button>
        </form>

    )
}
export default FeedbackForm;




















