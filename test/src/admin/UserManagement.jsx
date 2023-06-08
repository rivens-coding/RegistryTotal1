import './userManagement.css';
import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo , faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const UserManagement = () =>{
    const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const url = "http://localhost:4000/user"

  const columnDefs = [
    { 
        field: "userId", 
        headerName: "Id",
      },
    { 
      field: "accountName", 
      headerName: "Tên tài khoản",
    },
    {
      field: "password",
      headerName: "Mật khẩu",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "phoneNumber",
      headerName: "Số điện thoại",
    },
    {
      field: "address",
      headerName: "Địa chỉ",
    },
    {
        field: "registerID", 
        headerName: "",
        width:30,
        cellRendererFramework:()=><div>
          <Link to="/admin/uau">
          <FontAwesomeIcon icon={faEdit}/>
          </Link>
          </div>
      },
      {
          field: "registerID", 
          headerName: "",
          width:30,
          cellRendererFramework:(params)=><div>
          <FontAwesomeIcon
          icon={faTrash} color='#ff0000'
          onClick={() => handleDelete(params.value)}
          />
          </div>
      }
    
  ];
  
  const handleDelete=(id)=>{}

  const defaultColDef = useMemo( ()=> (
    {
      sortable: true,
      filter: true,
      resizable: true,
      pagination: true,
      paginationPageSize: 10,
      width: 185
    }
  ), [] );

  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    fetch(url).then(resp=>resp.json()).then(resp=>setTableData(resp))
  }

  const onGridReady = (params) => {
    setGridApi(params)
  }

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
    <div className="ag-theme-alpine" style = {{height:400, margin:50}}>
      <h1 align="center">Admin panel</h1>
      <Grid align="right" margin={1}>
      <Link to="/admin/ua">
          <Button variant="contained" color="primary" >+ Add</Button>
        </Link>
      </Grid>
      <AgGridReact
        rowData={tableData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
    </div>
    </div>
  );
};

export default UserManagement;