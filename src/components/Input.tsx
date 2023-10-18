import React, {ChangeEvent, Dispatch, SetStateAction} from "react"

type InputPropsType = {
    inputText: string
    setInputText: Dispatch<SetStateAction<string>>
}
export const Input: React.FC<InputPropsType> = ({inputText, setInputText}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={inputText} />
    )
}