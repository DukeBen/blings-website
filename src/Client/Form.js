import React, {useState} from 'react'

export default function Form() {
    
        const[submission, setSubmission] = useState("");
        const [search, setSearch] = useState('')
        const submissionChange = (e) =>
        {
            setSubmission(e.target.value);
        }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(submission)
        setSubmission("");
      };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Input:
            <input type="text" value={submission} onChange={submissionChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
        {<p>Submitted Entry: {search}</p>}
    </div>
    )
}
