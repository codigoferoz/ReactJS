import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact'

const ContactListComponent = () => {

    const defaultContact = new Contact('Juan', 'Perezz', 'aperez@gmail.com',false)
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de conexión')
    }

    return (
        <div>
            <div>
                <h1>Your Contact</h1>
                {/* TODO:  Aplicar un For/Map para renderizar una lista */}
                <ContactComponent Contact={ defaultContact }></ContactComponent>
            </div>
        </div>
    )
}

export default ContactListComponent;