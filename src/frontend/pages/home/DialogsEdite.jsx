import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import {deleteProductEvotor, updateProductEvotor} from "../../../redux/apiCalls/productsApiCall";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

export default function DialogsEdite({ Product }) {
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = React.useState(Product?.price);
    const [name, setName] = React.useState(Product?.name);
    const [quantity, setQuantity] = React.useState(Product?.quantity);
    const [cost_price, setCost_price] = React.useState(Product?.cost_price);

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProductData = {
            ...Product,
            price: parseFloat(price),
            name: (name),
            quantity: (quantity),

        };
        dispatch(updateProductEvotor(Product.id, updatedProductData));
        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <AutoFixNormalIcon/>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Current Price: {Product?.price}
                        </DialogContentText>
                        <TextField
                            required
                            margin="dense"
                            id="price"
                            name="price"
                            label="Product Price"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="price"
                            name="Name"
                            label="Product Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="price"
                            name="quantity"
                            label="Product Quantity"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="cost_price"
                            name="cost price"
                            label="Product cost price"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={cost_price}
                            onChange={(e) => setCost_price(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color={"inherit"} onClick={handleClose}>Cancel</Button>
                        <Button color={"warning"} onClick={()=>{dispatch(deleteProductEvotor(Product?.id))
                        }} type="submit">Delete</Button>
                        <Button color={"success"} type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}
