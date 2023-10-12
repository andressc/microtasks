import React from "react";

type ButtonPropsType = {
    title: string
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    return <button onClick={() => props.callBack()}>{props.title}</button>
}