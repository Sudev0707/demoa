import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Contact from './Contact';
import AddContent from './AddContent';
import ContactList from './ContactList';
import ContactCard from './ContactCard';


function App() {

  const[contacts, setContacts] = useState()


  return (
    <div className='main-container row '>

      

      {/* --------------- task ----------------------*/}
      <Header />
      <div className='details'>
        <AddContent />
        <Contact />
        <ContactList contacts={contacts} />
        <ContactCard/>
      </div>


    </div> // App container end
  );


}



export default App;
