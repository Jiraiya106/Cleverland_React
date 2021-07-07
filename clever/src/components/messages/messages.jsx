import React, { useEffect } from 'react'
import { useDispath } from 'react-redux'

import './messages.css'

export const Messages = () => {
    const dispatch = useDispath();
    useEffect(() => {
        dispatch()
    }, [])
    return <div>Chat</div>
}