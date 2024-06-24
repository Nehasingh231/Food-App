import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const Contact = () => {
    const{loggedInUser} = useContext(UserContext)
 return  (
<div>
<h1>contact us</h1>
<h3>contact user: {loggedInUser}</h3>
</div>
 ) ;
};
export default Contact;