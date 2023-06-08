import './registryTable.css';
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

const RegistryTable = () =>{
    const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const url = "http://localhost:4000/dangkiem"

  const columnDefs = [
    { 
      field: "registerID", 
      headerName: "Biển đăng kí",
      filter: "agTextColumnFilter",
    },
    {
      field: "registerDate",
      headerName: "Ngày đăng ký",
      filter: "agDateColumnFilter",
    },
    {
      field: "brand",
      headerName: "Nhãn hiệu",
      filter: "agTextColumnFilter",
    },
    {
      field: "owner",
      headerName: "Chủ phương tiện",
      filter: "agTextColumnFilter",
    },
    {
      field: "city",
      headerName: "Thành phố",
      filter: "agTextColumnFilter",
    },
    { 
      field: "re_registerDate", 
      headerName: "Ngày kiểm định",  
      filter: "agDateColumnFilter",
    },
    {
      field: "department",
      headerName: "Đơn vị kiểm định",
      filter: "agNumberColumnFilter",
    },
    { 
      field: "registerTime",
      headerName: "Thời hạn chứng nhận",
      filter: "agDateColumnFilter",
    },
    { 
      field: "registerNumber", 
      headerName: "Mã số cấp",
      filter: "agNumberColumnFilter",
    },
    {
      field: "registerID", 
      headerName: "",
      width:30,
      cellRendererFramework:()=><div>
        <Link to="/admin/ib">
        <FontAwesomeIcon icon={faInfo}/>
        </Link>
        </div>
    },
    {
      field: "registerID", 
      headerName: "",
      width:30,
      cellRendererFramework:()=><div>
        <Link to="/admin/ur">
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

  const handleDelete=(id)=>{
  }


  const defaultColDef = useMemo( ()=> (
    {
      sortable: true,
      resizable: true,
      pagination: true,
      paginationPageSize: 10,
      width: 150
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
        <Link to="/admin/ar">
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

export default RegistryTable;