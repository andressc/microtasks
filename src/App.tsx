import {ChangeEvent, useState} from "react"
import {FullInput} from "./components/FullInput"
import {Input} from "./components/Input"
import {Button} from "./components/Button"

export type Message = {
    message: string
}
function App() {
    const [message, setMessage] = useState<Message[]>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [inputText, setInputText] = useState("")

    // const setInputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputText(e.currentTarget.value)
    // }

    const addMessage = () => {
        setMessage(v => [{message: inputText}, ...v])
        setInputText('')
    }

    return (
        <div className="App">
            <Input inputText={inputText} setInputText={setInputText}/>
            <Button title="+" callBack={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App