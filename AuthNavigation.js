import React, { useEffect, useState } from 'react';
import { SignedInStack, SignedOutStack } from './Navigation';
import {firebase} from "./firebase";

const authNavigation = () => {
    const [currentUser, setCurrentUser] = useState(true);

    const useHandler = user => user ? setCurrentUser(user) : setCurrentUser(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => useHandler(user))
    }, []);
    
    return (
        <>
            <SignedInStack />
        </>
    );
};

export default authNavigation;