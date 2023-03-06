import React, { useState } from 'react';
import { SearchData } from '../Utils/SearchData';
import Profile from './Profile';

export default function Form() {
  const [contacts, setContacts] = useState([]);
  const [submission, setSubmission] = useState('');
  const [search, setSearch] = useState('');
  const [submitted, setSubmit] = useState(false);

  const submissionChange = (e) => {
    setSubmission(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(submission);
    setSubmission('');
    addProfiles(submission);
    setSubmit(true);
  };

  const addProfiles = (entry) => {
    const foundContacts = SearchData(entry);
    setContacts(foundContacts.length > 0 ? foundContacts : []);
  };

  return (
    <div>
      <div>
        {
          !submitted && <p>Welcome! 
            Please input the name, age, and/or phone number of the person you are searching</p>
        }
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={submission} onChange={submissionChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Submitted Entry: {search}</p>}
      <div>
      {contacts != null && contacts.length > 0 ? (
        contacts.map((contact) => (
          <Profile
            key = {contact._id}
            source ={`${contact.picture}`}
            name={contact.name}
            birth = {contact.birthday}
            address={contact.address}
            number = {contact.phone_number}
          />
        ))
      ) : (
        submitted && <p>No results, please review your search or try a different one.</p>
  )}
</div>
    </div>
  );
}
