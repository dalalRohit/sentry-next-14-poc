'use client';

import * as Sentry from '@sentry/nextjs';
import React from 'react'

function Setter() {
    React.useEffect(() => {
        const userId="1234";
        if(userId){
            Sentry.setUser({id:userId,email:"rohit@gmail.com"})
        }
    },[]);

    return null;
}

export default Setter
