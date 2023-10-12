import React from "react";

export type Student = {
    id: number
    name: string,
    age: number
}

type NewComponentPropsType = {
    students: Student[]
}

type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent: React.FC<NewComponentPropsType> = (props) => {

    const topCars: CarsType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map(v => {
                        return <li key={v.id}>
                            <span>{v.name}</span>
                            <span> {v.age} age(s)</span>
                        </li>
                    }
                )}
            </ul>

            <table>
                <tr>
                    <th>#</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {topCars.map((v,i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{v.manufacturer}</td>
                        <td>{v.model}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}