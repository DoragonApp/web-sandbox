import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AnimeCard from './Card';

type Item = { img: string; cols: any; mal_id: number; title: string; score: number; image_url: string; synopsis: string; airing_start: string; }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function AnimeGrid(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <GridList cellHeight={'auto'}>
          {props.items.map((item: Item) => (
            <Grid item xs={10} sm={2}>
              <GridListTile key={item.img}>
                <AnimeCard key={item.mal_id} title={item.title} score={item.score} image_url={item.image_url} synopsis={item.synopsis} airing_start={item.airing_start} />
              </GridListTile>
            </Grid>
          ))}
        </GridList>
      </Grid>
    </div>
  );
}