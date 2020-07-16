import React, { useState, useEffect } from 'react';
import Axios from "axios";
import CustomizedTables from './Components/Table/index';
import BarCharts from './Components/Charts/BarCharts/index';
import PieCharts from './Components/Charts/PieCharts/index';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [dataPembelian, setDataPembelian] = useState({});
  const [dataPenjualan, setDataPenjualan] = useState([]);
  const [dataStockBarang, setDataStockBarang] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getDataPembelian();
    getDataPenjualan();
    getDataStockBarang();
  }, []);

  const getDataPembelian = () => {
    Axios.get(`http://localhost:3030/pembelian/pembelianSummary`,
      {
        params: {
          // page: action.data.page,
          // person_people_uuid: action.data.person_people_uuid,
        },
      }
    )
      .then((response) => {
        setDataPembelian(response.data.values)
        
      })
      .catch((error) => {
        
      });
  };

  const getDataPenjualan = () => {
    Axios.get(`http://localhost:3030/penjualan`,
      {
        params: {
          // page: action.data.page,
          // person_people_uuid: action.data.person_people_uuid,
        },
      }
    )
      .then((response) => {
        setDataPenjualan(response.data.values)
        
      })
      .catch((error) => {
        
      });
  };

  const getDataStockBarang = () => {
    Axios.get(`http://localhost:3030/stockBarang`,
      {
        params: {
          // page: action.data.page,
          // person_people_uuid: action.data.person_people_uuid,
        },
      }
    )
      .then((response) => {
        setDataStockBarang(response.data.values)
        
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
      <h2 style={{color: 'white'}}>PPD Dashboard Gudang</h2>
      </Grid>
      <Grid item xs={6}>
      <h4 style={{color: 'white'}}>Penjualan</h4>
      <BarCharts data={dataPenjualan} />
      </Grid>
      <Grid item xs={6}>
      <h4 style={{color: 'white'}}>Stock Barang</h4>
      <PieCharts data={dataStockBarang} />
      </Grid>

      <Grid item xs={12}>
      <h4 style={{color: 'white'}}>Pembelian</h4>
      <CustomizedTables data={dataPembelian} />
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
