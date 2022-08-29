import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form1 from './forms/Form1'
import Form2 from './forms/Form2'

export interface Data {
  nome: string
  sobrenome: string
  email: string
  senha: string
}

type Step = 1 | 2

function App() {
  const [data, setData] = useState<Data>({nome: '', sobrenome: '', email: '', senha: ''})
  const [step, setStep] = useState<Step>(1)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="App">
      {step === 1 && <Form1 data={data} setData={setData} />}
      {step === 2 && <Form2 data={data} setData={setData} />}

      <div style={{marginTop: '30px'}}>
        <button 
          onClick={() => {
            if(step === 2) setStep(1)
          }}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            if(step === 1) setStep(2)
          }}
        >
          Proximo
        </button>
      </div>
    </div>
  )
}

export default App
