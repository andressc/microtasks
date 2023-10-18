import React, {ChangeEvent, MouseEventHandler, useState} from "react"
import {Message} from "../App"

type FullInputPropsType = {
    addMessage: (mess: string) => void
}
export const FullInput: React.FC<FullInputPropsType> = ({addMessage}) => {

    const [inputText, setInputText] = useState("")

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(inputText)
        setInputText('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={inputText} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}