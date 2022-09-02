import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate, useParams } from 'react-router-dom';
import { GetDetail } from '../services/api';
import moment from 'moment'

const columns = [
  { field: "WarehouseID", headerName: "ID", width: 90, sortable: false, cellClassName: 'row-font', },
  {
    field: "Branch",
    sortable: false,
    headerName: "Branch",
    width: 150,
  },
  {
    field: "Active",
    sortable: false,
    headerName: "Active",
    width: 150,
  },
  {
    field: "Description",
    sortable: false,
    headerName: "Desc",
    width: 150,
  },
  {
    field: "LastSync",
    headerName: "Last Sync",
    sortable: false,
    width: 170,
    valueGetter: (val) =>
      `${moment(val.row.LastSync).format('LL')}`,
  },
];

const DetailWarehouse = () => {
  const [istData, setData] = useState([])
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    GetDetail(params.id)
      .then((res) => setData([res.data]))
  }, [params.id])

  const handleClick = (params) => {
    navigation(`/detail/${params.id}`)
  }

  console.log();

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 5, height: 400, width: 800,
      '& .row-font': {
          color: '#51D9F3',
          fontWeight: '600',
          cursor: 'pointer'
        },
       }}
    >
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="#4284F3" href="/">
            Home
          </Link>
          <Link underline="hover" color="#4284F3" href="/">
            Warehouse
          </Link>
          <Typography color="#4284F3">Detail Location Warehouse - {params.id}</Typography>
        </Breadcrumbs>
      </div>
      <div>
        <h1>Detail Location Warehouse - {params.id}</h1>
      </div>
      <DataGrid
          rows={istData}
          onRowClick={handleClick}
          getRowId={(istData) => istData.WarehouseID}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
    </Box>
  );
}

export default DetailWarehouse;
