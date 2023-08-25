import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Article({data}){
    return(
        <> 
            <Grid item sx={{width: "80%", margin: "auto", textAlign: "center"}}>
                <Card>
                    <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h3" component="h3">
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {data.description}
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                        {data.article}
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}