import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contacts) => {
        return (
            <ContactCard contacts= {contacts} />
        )
    })

    return (
        <div className="ui main contact-list  col-4 m-2">
            <h5 className="text-center">Contact List</h5>
            {renderContactList}
        </div>

    );

}

export default ContactList;