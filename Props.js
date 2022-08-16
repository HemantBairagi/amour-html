import React from 'react'

const style = {
    border: "2px solid red",
    margin: "20px",
    padding: "20px",
}
export const Props = (Props) => {
    return (
        <>
            <div className="main-class">
            <div style={style}>
                <h1>Brand {Props.Brand}</h1>
                <p><b>Price {Props.Price}</b></p>
                <p><b>Description {Props.Description}</b></p>
            </div>
        </div>
        </>
    )
}
