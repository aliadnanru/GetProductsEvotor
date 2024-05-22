import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EvotorCard from "./EvotorCard";
import { fetchProductEvotor } from "../../../redux/apiCalls/productsApiCall";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/joy";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";

export function Home() {
    const [search, setSearch] = useState("");
    const { products , isLoading } = useSelector((state) => state.product); // تأكد من أن products مصفوفة دائماً
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductEvotor());
    }, [dispatch]);

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

    const productsBySearch = filteredProducts.map((t, index) => (
        <div key={t?.id}>
            <EvotorCard Product={t} index={index}/>
        </div>
    ));

    return (
        <div style={{
            display: 'flex',
            width: "100%",
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: "center",
            marginTop: "20px",
        }}>
            <SwipeableEdgeDrawer/>
            <label>поиск</label>
            <input
                style={{
                    padding: "10px",
                    width: '50%',
                    margin: "5px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "14px",
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div style={{
                overflow: "scroll",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <div style={{height: "75vh", marginTop: "10px"}}>
                    {isLoading ? <CircularProgress size="lg"/> : productsBySearch.length > 0 ? productsBySearch : <h1>No products found</h1>}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
