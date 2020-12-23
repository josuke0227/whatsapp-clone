import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider.js";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flash">
      {contacts.map((contact) => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
