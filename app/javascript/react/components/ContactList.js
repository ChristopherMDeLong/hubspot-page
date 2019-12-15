import React from 'react';

const ContactList = props => {
  let contacts = props.contacts.map((contact, index) => {
    return(
      <li key={contact.index}>
        <strong>
          {contact.name}:
        </strong>
        &nbsp;{contact.email}
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">People</h3>
      <ul>{contacts}</ul>
    </div>
  );
}

export default ContactList;
