import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ParallaxBackButtons from "../Components/Parallax/ParallaxBackButtons";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridContainer from "../Components/Grid/GridContainer";
const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        display: 'flex',

        minWidth: 200,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex:1,

            color:"#fff",
            '& $imageBackdrop': {
                opacity: 0.25,
                backgroundColor:"#9f0018",
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                color: '#eff8ff',
            },
        },
    },
    gridList: {
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyItems:"center",
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <div style={ {display: 'flex', minWidth: 100, }}>
                <Grid container xs={12} >


                    <Grid item  xs={12}  md={6}>

                        <ParallaxBackButtons image={require('../../asset/img/marinavorontsova160800088.jpg')}>

                        <GridList cellHeight={120}  className={classes.gridList}>
                            <Grid container>

                            <Grid item  >
                     <GridListTile >
                    <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width:"100%",
                        minWidth:"200px"
                    }}
                >

                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu

            </Typography>
          </span>
                </ButtonBase>
                       </GridListTile>
                            </Grid>
                            <Grid item  >
                         <GridListTile >
                             <ButtonBase
                                 focusRipple
                                 className={classes.image}
                                 focusVisibleClassName={classes.focusVisible}
                                 style={{
width:"100%",
                                     minWidth:"200px"
                                 }}
                             >
<span
    className={classes.imageSrc}

/>
                                 <span className={classes.imageBackdrop} />
                                 <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu Special

            </Typography>
          </span>
                             </ButtonBase>
                         </GridListTile>
                            </Grid>
                            <Grid item  >
                         <GridListTile >
                             <ButtonBase
                                 focusRipple
                                 style={{
                                     width:"100%",
                                     minWidth:"200px"
                                 }}
                                 className={classes.image}
                                 focusVisibleClassName={classes.focusVisible}
                             >

                                 <span className={classes.imageBackdrop} />
                                 <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
             Menu Summer

            </Typography>
          </span>
                             </ButtonBase>
                         </GridListTile>
                            </Grid>

                            </Grid>
                   </GridList></ParallaxBackButtons>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
<Typography variant={"h6"} style={{color:"#000"}}>The first Michelin Guide was compiled in 1900 by French industrialist Andre Michelin, along with his brother Edouard Michelin. They wanted to create demand for automobiles…and therefore, the tires they manufactured.

    At the time, there were plenty of bicycles, but there were only 300 cars in France. Not enough for a viable business selling automobile tires…the brothers had a profit motive.</Typography>
                        </div>
                    </Grid>
                    </Grid>
            </div>
                </div>


    );
}
