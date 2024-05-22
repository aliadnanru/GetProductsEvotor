import React from 'react';
import {Paper, Grid, Typography} from '@mui/material';
import './ProductItem.css';
import DialogsEdite from "./DialogsEdite";
// import StockIndicator from "../components/ProductItem2/StockIndicator";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import {CircularProgress} from "@mui/joy";
import LinearProgress from "@mui/joy/LinearProgress";

const EvotorCard = ({Product, index}) => {
    return (
        <Paper style={{margin: '8px', padding: '8px'}}
               elevation={1}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <h3>{index + 1}</h3>
                </Grid>
                <Grid item xs>
                    <Typography style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        textDecoration: Product?.quantity < 0 ? 'line-through' : 'none',
                        // color: Product?.quantity < 0 ? 'red' : 'black',
                    }} variant="subtitle1">{Product?.name}</Typography>
                </Grid>
                <Grid item

                      style={{display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column"}}>
                    {/*<StockIndicator stock={Product?.quantity}/>*/}
                    <h3 style={{color: Product?.quantity <= 0   ? 'red' : 'black'}}>{Product?.quantity > 0 ? `${Product?.quantity} шт` : "Нет в наличии"} </h3>


                    {/*<Chip label={`${product.stock} in stock`} size="small" style={{ backgroundColor: green[500], color: '#fff' }} />*/}
                </Grid>

                <Grid item>
                    <Typography style={{fontWeight: "bold"}}>{Product?.quantity <= 0? null :`${Product?.price}₽` }</Typography>
                </Grid>
                <Grid item>
                    {/*<NumberBadge/>*/}
                    {/*<button onClick={() => alert(Product?.id)} className="add-to-cart-button">+*/}
                    {/*</button>*/}
                    <DialogsEdite Product={Product}/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default EvotorCard;
