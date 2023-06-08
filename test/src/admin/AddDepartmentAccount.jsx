import * as React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const AddDepartmentAccount = () =>{
    return(
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
       <div>
            AddDepartmentAccount
        </div>
        </div>
        </div>
    );
};

export default AddDepartmentAccount;