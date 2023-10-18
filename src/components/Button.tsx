import React from "react";

type ButtonPropsType = {
    title: string
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, callBack}) => {

    const onClickButtonHandler = () => {
        callBack()
    }


    return <button onClick={onClickButtonHandler}>{title}</button>
}