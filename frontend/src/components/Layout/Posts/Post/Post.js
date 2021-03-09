import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core/';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  />
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
    
     
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.creator}</Typography>
      
    </Card>
  );
};

export default Post;