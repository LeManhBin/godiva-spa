import { createContext, useReducer } from 'react'
import { reducer } from '../Reducer/reducer'


const initialState = {
  isOpenRegisterModal: false
}

export const WebContext = createContext()

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <WebContext.Provider value={[state, dispatch]}>
        {children}
    </WebContext.Provider>
  )
}

export default ContextProvider