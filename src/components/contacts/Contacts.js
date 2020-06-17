import React from 'react';
import { Table } from 'semantic-ui-react';
import Contact from './Contact';
const Contacts = ({ contacts }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        contacts.map( c => (
          // <Contacts key={c.id} firstName={c.firstName} phone={c.phone} id={c.id} />
          <Contact key={c.id} {...c} />
        ))
      }
    </Table.Body>
  </Table>
)
export default Contacts