import React from "react";
 

const ContactCard= (props) =>{

    // const {id, name, email} = props.contacts;

    return(
        <div className="items">
        <div className="contents">
            

            <div class="list-group border-0">
                <label class="list-group-item border-0">
                    {/* <h6>{id}</h6> */}
                    <h6>{name}</h6>
                    <span className="mx-5">{email}</span>
                    <button className="btn"><i class="fa-solid fa-trash-can" ></i></button>
                </label>
                
            </div>
        </div>
        
    </div>
    );
}

export default ContactCard;