import React from "react";

export default function NasaCards({imgUrl}) {
    return(
        <div style={{maxWidth: "100px"}}>
            <img src={imgUrl} />
        </div>
    );
}