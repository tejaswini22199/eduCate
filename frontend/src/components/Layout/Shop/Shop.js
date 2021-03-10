import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './Styles';
import EachProduct from './Shop/EachProduct';

const Shop = () => {
  var products = useSelector((state) => state.product);
  
  const classes = useStyles();
  console.log(products);
//   products=products.data;
  return (
    ! products.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
        products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={6}>
            <EachProduct product={product} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Shop;