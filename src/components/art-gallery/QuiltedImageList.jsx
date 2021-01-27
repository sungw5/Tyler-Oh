import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles({
  root: {
    width: 1800,
    height: 600,
    margin: -20,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

export default function TitlebarBelowImageList() {
  const classes = useStyles();

  return (
    <ImageList className={classes.root}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://github.com/sungw5/imgs/blob/main/catface.jpg?raw=true',
    title: 'CatFace drawing',
    author: 'Sung Woo Oh',
  },
  {
    img: 'https://github.com/sungw5/imgs/blob/main/colorviolins.jpg?raw=true',
    title: 'Unique Violin',
    author: 'Sung Woo Oh',
  },

  {
    img: 'https://github.com/sungw5/imgs/blob/main/bellwordspic.jpg?raw=true',
    title: 'Bell',
    author: 'Sung Woo Oh',
  },
  {
    img: 'https://github.com/sungw5/imgs/blob/main/feets.jpg?raw=true',
    title: 'Union',
    author: 'Sung Woo Oh',
  },
  {
    img: 'https://github.com/sungw5/imgs/blob/main/glass14.jpg?raw=true',
    title: 'Physics',
    author: 'Sung Woo Oh',
  },
  {
    img:
      'https://github.com/sungw5/imgs/blob/main/koreasnowstairs.jpg?raw=true',
    title: 'Snows on stairs',
    author: 'Sung Woo Oh',
  },
  {
    img:
      'https://github.com/sungw5/imgs/blob/main/mirrorpaperplanenme.jpg?raw=true',
    title: 'Fight yourself',
    author: 'Sung Woo Oh',
  },
  {
    img:
      'https://github.com/sungw5/imgs/blob/main/tyler%20skelcopy.jpg?raw=true',
    title: 'Unlimited',
    author: 'Sung Woo Oh',
  },
  {
    img:
      'https://github.com/sungw5/imgs/blob/main/kiddrawingpractice.jpg?raw=true',
    title: 'Brandon',
    author: 'Sung Woo Oh',
  },
  {
    img: 'https://github.com/sungw5/imgs/blob/main/cadincats.jpg?raw=true',
    title: 'Four cats of Cadin',
    author: 'Sung Woo Oh',
  },
];
