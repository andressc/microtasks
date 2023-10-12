import React from "react";

type FooterPropsType = {
    title: string
}

export const Footer: React.FC<FooterPropsType> = (props) => {
    return (
        <div>{props.title}</div>
    )
}