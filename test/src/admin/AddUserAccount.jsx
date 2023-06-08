import * as React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const AddUserAccount = () =>{
    return(
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
       <div>
            AddUserAccount
        </div>
        </div>
        </div>
    );
};

export default AddUserAccount;