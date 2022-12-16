import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios' ;
import {useEffect} from "react";
import './FormStyles.css'

const columns = [
  { id: 'list_id', label: 'List Index', minWidth: 170, color : 'black' },
  { id: 'shopping_location', label: 'Shopping Location', minWidth: 100 },
  {
    id: 'shopping_date',
    label: 'Shopping Date',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },


];

function createData(name, code, population) {
  return { name, code, population };
}



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const getShoppingListRequest = async() => {
      const url = "http://192.168.1.106:5011/show_list";
      await axios.get(url).then (response => {
        setRows((response.data["response"]));
    })
  }

  useEffect(() => {
    getShoppingListRequest();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(rows)
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.list_id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}