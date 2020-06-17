import React from 'react';
import { Button, Table } from 'semantic-ui-react';
const Contact = ({ id, firstName, phone }) => (
  <Table.Row>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color='red'>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)
export default Contact;