import React from 'react';
import {Paper, Grid, Typography} from '@mui/material';
import './ProductItem.css';
// import StockIndicator from "../components/ProductItem2/StockIndicator";
const EvotorCard = ({Product, index}) => {
    return (
        <Paper style={{margin: '8px', padding: '8px'}}
               elevation={1}>
            <Grid container alignItems="center" spacing={2} >
                <Grid item>
                    <h3>{index+1}</h3>
                </Grid>
                <Grid item xs>
                    <Typography style={{cursor: "pointer"}} variant="subtitle1">{Product?.name}</Typography>
                </Grid>
                <Grid item

                      style={{display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column"}}>
                    {/*<StockIndicator stock={Product?.quantity}/>*/}
                    <h3> {Product?.quantity}шт</h3>

                    {/*<Chip label={`${product.stock} in stock`} size="small" style={{ backgroundColor: green[500], color: '#fff' }} />*/}
                </Grid>

                <Grid item>
                    <Typography style={{fontWeight: "bold"}}>{Product?.price}₽</Typography>
                </Grid>
                <Grid item>
                    {/*/!*<NumberBadge/>*!/*/}
                    {/*<button onClick={() => dispatch(cartActions.addCart(Product))} className="add-to-cart-button"><AddShoppingCartIcon/>*/}
                    {/*</button>*/}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default EvotorCard;
