import React, { CSSProperties } from 'react'
import { BarLoader } from 'react-spinners'

function Loader() {
    const override = CSSProperties = {
        display: "block",
        margin: " auto",
        marginTop: "250px",
        width: "200px"

    };
    return (
        <BarLoader color='#2274A5' cssOverride={override} loading={true}></BarLoader>
    )
}

export default Loader