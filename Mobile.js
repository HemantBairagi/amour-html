import React from 'react'
import Array from './Array'

const Data = (props) => {
    return (
        <>
            <h1>Brand: {props.Brand}</h1>
            <p><b>Price: {props.Price}</b></p>
            <p><b>Description: {props.Description}</b></p>
        </>
    )
}
const Mobile = () => {
    return (
        <>
            {Array.map((val, index) => {
                return (
                    <div key={index}>
                        <Data Brand={val.Brand} Price={val.Price} Description={val.Description} />
                    </div>
                )

            })}
        </>
    )
}

export default Mobile