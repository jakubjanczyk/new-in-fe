import styled from 'styled-components'
import { useDeferredValue, useMemo, useState, useTransition } from 'react'

const Main = styled.div`
  display: flex;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  
  border: 2px solid black;
  
  width: fit-content;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  animation: App-logo-spin infinite 20s linear;
`

function generateRows(value) {
  if (value === '' || value === undefined) {
    return null
  }
  const rows = Array.from(Array(1000), (i) => {
    return (
      <div key={i}>
        <Img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          className="App-logo" alt="logo" />
        <div>{value}</div>
      </div>
    )
  })
  return <div>{rows}</div>
}

export const Transition = () => {
  const [transitionInputValue, setTransitionInputValue] = useState('')
  const [transitionResults, setTransitionResults] = useState('')
  const [isPending, startTransition] = useTransition()

  const [rawInputValue, setRawInputValue] = useState('')
  const [rawResults, setRawResults] = useState('')

  const [deferredInputValue, setDeferredInputValue] = useState('')
  const deferredQuery = useDeferredValue(deferredInputValue);
  const deferredResults = useMemo(() =>
      generateRows(deferredQuery),
    [deferredQuery]
  );

  const onChangeTransition = (event) => {
    const value = event.target.value
    setTransitionInputValue(value)

    const list = generateRows(value)

    startTransition(() => {
        setTransitionResults(list)
    })
  }

  const onChangeRaw = (event) => {
    const value = event.target.value
    setRawInputValue(value)

    const list = generateRows(value)
    setRawResults(list)
  }

  const onChangeDeferred = (event) => {
    const value = event.target.value
    setDeferredInputValue(value)
  }

  return (
      <Main>
        <Container>
          With useTransition
          <input onChange={onChangeTransition} value={transitionInputValue}/>
          {isPending && <div>Reloading...</div>}
          <div>Result: {transitionResults}</div>
        </Container>
        <Container>
          Without useTransition
          <input onChange={onChangeRaw} value={rawInputValue}/>
          <div>Result: {rawResults}</div>
        </Container>
        <Container>
          With useDeferredValue
          <input onChange={onChangeDeferred} value={deferredInputValue}/>
          <div>Result: {deferredResults}</div>
        </Container>
      </Main>
  )
}
