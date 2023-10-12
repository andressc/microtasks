import React, {useState} from 'react';
import './App.css';

type BanknoteType = "dollar" | "ruble"

type ButtonType = BanknoteType | "all"

type Money = {
    banknote: BanknoteType
    nominal: number
    number: string
}

function App2() {

  // let [students, setStudents] = useState<Student[]>([
  //     {id: 1, name: "James", age: 8},
  //     {id: 2, name: "Robert", age: 18},
  //     {id: 3, name: "John", age: 28},
  //     {id: 4, name: "Michael", age: 38},
  //     {id: 5, name: "William", age: 48},
  //     {id: 6, name: "David", age: 58},
  //     {id: 7, name: "Richard", age: 68},
  //     {id: 8, name: "Joseph", age: 78},
  //     {id: 9, name: "Thomas", age: 88},
  //     {id: 10, name: "Charles", age: 98},
  //     {id: 11, name: "Christopher", age: 100}])

    // const subscriber = (subscriber: string) => {
    //     console.log(`hello I Am ${subscriber}`)
    // }
    //
    // return (
    //     <div className="App">
    //         <button onClick={() => subscriber('vasya')}>Button</button>
    //     </div>
    // );

    // const hello = (userName: string, age: number) => {
    //     console.log(`Hello I am ${userName} ${age}`)
    // }
    //
    // const stupidButton = () => {
    //     console.log('I am stupid button')
    // }
    //
    // return (
    //     <>
    //         <Button title="chanel 1" callBack={() => {hello("Vas", 21)}} />
    //         <Button title="chanel 2" callBack={() => {hello("Ivan", 21)}} />
    //         <Button title="stupid" callBack={stupidButton} />
    //     </>
    // )

    /*let [counter, setCounter] = useState(1)

    const plus = () => {
        setCounter(v => v + 1)
    }

    const minus = () => {
        setCounter(v => v - 1)
    }

    const clear = () => {
        setCounter(1)
    }

    return (
        <div className="App">
            <span>{counter}</span>
            <div className="buttons">
                <button onClick={plus}>Plus</button>
                <button onClick={minus}>Minus</button>
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    )*/

    // const [money, setMoney] = useState<Money[]>([
    //     {banknote: "dollar", nominal: 100, number: "a123456789"},
    //     {banknote: "dollar", nominal: 50, number: "b123456789"},
    //     {banknote: "ruble", nominal: 100, number: "c123456789"},
    //     {banknote: "dollar", nominal: 100, number: "d123456789"},
    //     {banknote: "dollar", nominal: 50, number: "e123456789"},
    //     {banknote: "ruble", nominal: 100, number: "f123456789"},
    //     {banknote: "dollar", nominal: 50, number: "j123456789"},
    //     {banknote: "ruble", nominal: 50, number: "h123456789"}
    // ])
    //
    // const [newListMoney, setNewListMoney] = useState(money)
    //
    // const onClickHandler = (banknote: ButtonType) => {
    //
    //     if(banknote === "all") {
    //         setNewListMoney(money)
    //         return
    //     }
    //
    //     setNewListMoney(money.filter(v => v.banknote === banknote))
    // }

    // const [filter, setFilter] = useState<ButtonType>("all")
    //
    // let newListMoney = money
    //
    // if(filter === "ruble") {
    //     newListMoney = money.filter(v => v.banknote === filter)
    // }
    //
    // if(filter === "dollar") {
    //     newListMoney = money.filter(v => v.banknote === filter)
    // }
    //
    // const onClickHandler = (filter: ButtonType) => {
    //     setFilter(filter)
    // }

    // return (
    //     <>
    //         <ul>
    //             {newListMoney.map((v, i) => {
    //                 return(
    //                     <li key={i}>
    //                         <span>{v.banknote}</span>
    //                         <span> {v.nominal}</span>
    //                         <span> {v.number}</span>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //         <button onClick={() => onClickHandler("all")}>all</button>
    //         <button onClick={() => onClickHandler("ruble")}>ruble</button>
    //         <button onClick={() => onClickHandler("dollar")}>dollar</button>
    //     </>
    // );
}



export default App2;
