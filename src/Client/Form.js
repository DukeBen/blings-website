import React, { useState, useEffect } from 'react';
import { SearchData } from '../Utils/SearchData';
import Profile from './Profile';

export default function Form() {
  const [contacts, setContacts] = useState([]);
  const [submission, setSubmission] = useState('');
  const [search, setSearch] = useState('');
  const [submitted, setSubmit] = useState(false);
  const[myVar, setMyVar] = useState('');

  useEffect(() => {
    if (submission !== '') {
      const timeReq = setTimeout(() => addProfiles(submission), 3000);
      return () => clearTimeout(timeReq);
    }
  }, [submission]);

  const submissionChange = (e) => {
    setSubmission(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(submission);
    setSubmission('');
    //addProfiles(submission);
    setSubmit(true);
  };

  const addProfiles = () => {
    console.log(submission);
    const foundContacts = SearchData(submission);
    setContacts(foundContacts.length > 0 ? foundContacts : []);
  };

  return (
    <div>
      <img src='https://www.bresslercompany.com/wp-content/uploads/2015/03/Yellow_Pages_Logo.png' /> 
      <div style={{height: submitted ? '76px' : '60px'}}>
        {
          !submitted && (
            <div>
              <p className='intro'>
                Welcome! <br />
                Please input the name, age, and/or phone number (any format is fine, just don't use a space delimiter) of the person you are searching
              </p>
            </div>
          )
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
            source ={contact.picture}
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
