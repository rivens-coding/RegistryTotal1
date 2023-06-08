import * as React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const AddRegistry = () =>{
    return(
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
       <div>
            AddRegistry
        </div>
        </div>
        </div>
    );
};

export default AddRegistry;