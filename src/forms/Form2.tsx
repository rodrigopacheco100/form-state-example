import React from 'react'
import { Data } from '../App'

interface Form2Props {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>
}

const Form2: React.FC<Form2Props> = ({data, setData}) => {
  return (
    <div>
      <p>email</p>
      <input type={"email"} value={data.email} onChange={(event) => {
        setData({
          ...data,
          email: event.target.value
        })
      }} />
      <p>senha</p>
      <input type={"password"} value={data.senha} onChange={(event) => {
        setData({
          ...data,
          senha: event.target.value
        })
      }}/>
    </div>
  )
}

export default Form2