import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
  const classes = useStyles();
    // console.log('table', !!(props.data));
    const checkRows = isEmpty(props.data) ;
    console.log(checkRows);
    const rows = props.data;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
            <StyledTableCell align="left">No. Transaksi</StyledTableCell>
            <StyledTableCell align="center">Kode Barang</StyledTableCell>
            <StyledTableCell align="center">Kode Supplier</StyledTableCell>
            <StyledTableCell align="center">Total Pembelian</StyledTableCell>
            <StyledTableCell align="center">Tanggal Pembelian</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { checkRows === false ? rows.map((row) => (
            <StyledTableRow key={row.name}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="left">{row.no_transaksi}</StyledTableCell>
              <StyledTableCell align="center">{row.kd_barang}</StyledTableCell>
              <StyledTableCell align="center">{row.kd_supplier}</StyledTableCell>
              <StyledTableCell align="center">{row.total_pembelian}</StyledTableCell>
              <StyledTableCell align="center">{row.tgl_pembelian}</StyledTableCell>
            </StyledTableRow>
          )) : (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                
              </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}