import React, { useState, useEffect } from 'react';

import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import Contactform from '../pure/forms/contactForm';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Juan','Perez', 'jpere@gmail.com','connected');
    const defaultContact2 = new Contact('Marta','Lopez', 'mlopez@gmail.com','offline');
    const defaultContact3 = new Contact('María','Martínez', 'mmartinez@gmail.com','offline');

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Contact has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('ContactList component is going to unmount...')
        }
    }, [contacts])

    function completeContact(contact){
        console.log('Complete this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].completed = !tempContacts[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
        console.log('Delete this Contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);        
    }

    function addContact(contact) {
        console.log('Add this contact', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);        
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Connected</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => {
                        return (
                            <ContactComponent
                                key={index}
                                contact={contact}
                                complete={completeContact}
                                remove={deleteContact}
                            ></ContactComponent>
                        )
                    }

                    )}
                </tbody>
            </table>
        )
    }

    let contactsTable;

    if (contacts.length > 0) {
        contactsTable = <Table></Table>        
    } else {
        contactsTable = (
            <div>
                <h3>There are no contacts to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card Header (title) */}
                <div className='card-header p-3'>
                    <h5>
                        Your Contacts:
                    </h5>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scroller='true' style={ {position: 'relative', height: '400px'} }>
                    {/* TODO: Add Loading Spinner */}
                    { loading ? (<p style={loadingStyle}>Loading contacts...</p>) : contactsTable}
                </div>
            </div>            
        </div>
        <Contactform add={addContact} length={contacts.length}></Contactform>
        </div>
    );
};




export default ContactListComponent;
