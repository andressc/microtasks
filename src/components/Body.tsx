import React from "react";

type BodyPropsType = {
    title: string
}

export const Body: React.FC<BodyPropsType> = (props) => {
    return (
        <div>{props.title}</div>
    )
}