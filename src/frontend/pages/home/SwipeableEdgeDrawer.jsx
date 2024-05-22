import * as React from 'react';
import PropTypes from 'prop-types';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {useDispatch, useSelector} from "react-redux";
import {addProductEvotor} from "../../../redux/apiCalls/productsApiCall";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {KeyboardArrowRight} from "@mui/icons-material";
const drawerBleeding = 56;

const Root = styled('div')(({theme}) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
    const { products , isLoading } = useSelector((state) => state.product); // تأكد من أن products مصفوفة دائماً

    const {window} = props;
    const [open, setOpen] = React.useState(true);
    const [price, setPrice] = React.useState("");
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("NORMAL");
    const [cost_price, setCost_price] = React.useState(0);
    const [code, setCode] = React.useState(101);
    const [measure_name, setMeasure_name] = React.useState("шт");
    const [tax, setTax] = React.useState("NO_VAT");
    const [allow_to_sell, setAllow_to_sell] = React.useState(true);
    const [quantity, setQuantity] = React.useState("");
    const dispatch = useDispatch();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;


    const formHandelAdd = (e) => {
        e.preventDefault();
        dispatch(addProductEvotor(
            {
                name,
                price,
                quantity,
                type,
                cost_price,
                code,
                measure_name,
                tax,
                allow_to_sell,

            }
        ))
    }

    return (
        <Root>
            <CssBaseline/>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{textAlign: 'center', pt: 1}}>
                {/*<Button onClick={toggleDrawer(true)}>Open</Button>*/}
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller/>
                    <Typography sx={{p: 2, color: 'text.secondary'}}>{products?.length} results</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >

                    <form onSubmit={formHandelAdd} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}>
                        <label>Name</label>
                        <input style={{width:"50%",padding:"5px",fontWeight:"bold",fontSize:"18px",borderRadius:"10px"}} type={"text"} required={true} value={name} onChange={(e) => setName(e.target.value)}/>
                        <label>Price</label>
                        <input style={{width:"50%",padding:"5px",fontWeight:"bold",fontSize:"18px",borderRadius:"10px"}} type={"number"} required={true} value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <label>Quantity</label>
                        <input style={{width:"50%",padding:"5px",fontWeight:"bold",fontSize:"18px",borderRadius:"10px"}} type={"number"} required={true} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        <label>cost price</label>
                        <input style={{width:"50%",padding:"5px",fontWeight:"bold",fontSize:"18px",borderRadius:"10px"}} type={"number"} required={true}  value={cost_price} onChange={(e) => setCost_price(e.target.value)}/>
                        <button style={{marginTop:"10px",border:"none",borderRadius:"200px",cursor:"pointer"}}><AddCircleIcon style={{width:"50px",height:"50px",border:"none",color:"green"}}/></button>

                    </form>


                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
