import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import UserCard from './Components/UserCard';
import Users from './Components/Users';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setLoading(true);