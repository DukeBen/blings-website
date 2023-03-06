import React, { useState } from 'react';
import { SearchData } from '../Utils/SearchData';
import Profile from './Profile';

export default function Form() {
  const [contacts, setContacts] = useState([]);
  const [submission, setSubmission] = useState('');
  const [search, setSearch] = useState('');

  const submissionChange = (e) => {
    setSubmission(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(submission);
    setSubmission('');
    addProfiles(submission);
  };

  const addProfiles = (entry) => {
    const foundContacts = SearchData(entry);
    console.log(foundContacts);
    setContacts(foundContacts.length > 0 ? foundContacts : []);
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
      <div>
      {contacts != null && contacts.length > 0 ? (
        contacts.map((contact) => (
          <Profile
            key={contact.id}
            source={contact.source}
            label={`${contact.name}`}
            description={contact.age}
          />
        ))
      ) : (
        <p>No contacts found.</p>
  )}
</div>
    </div>
  );
}
