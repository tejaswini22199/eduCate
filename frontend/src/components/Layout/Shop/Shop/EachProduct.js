import React from 'react';
import { Card, CardMedia, Typography,Button ,Link} from '@material-ui/core/';
import moment from 'moment';
// import {echoAR} from '../../../EchoAR/echoAR.js';
import Usestyles from './styles';
// import {imageTrackComponent} from '../../../EchoAR/image-track.js'
// AFRAME.registerComponent('image-track', imageTrackComponent)
const EachProduct = ({ product}) => {
  const classes = Usestyles();
  // var echo = new echoAR(YOUR_API_KEY);
  var entryId= '5guc';
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  />
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <Typography variant="body2">{moment(product.createdAt).fromNow()}</Typography>
      </div>
    
     <Typography className={classes.title} variant="h5" component="h2">{product.cost}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product.name}</Typography>
      <Link href="https://go.echoar.xyz/5guc">
    ClickToViewAR
  </Link>
    </Card>
  );
};

export default EachProduct;