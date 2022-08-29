import React from 'react'
import { Data } from '../App'

interface Form1Props {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>
}

const Form1: React.FC<Form1Props> = ({ data, setData }) => {
  return (
    <div>
      <p>nome</p>
      <input type={"text"} value={data.nome} onChange={(event) => {
        setData({
          ...data,
          nome: event.target.value
        })
      }} />
      <p>sobrenome</p>
      <input type={"text"} value={data.sobrenome} onChange={(event) => {
        setData({
          ...data,
          sobrenome: event.target.value
        })
      }}/>
    </div>
  )
}

export default Form1