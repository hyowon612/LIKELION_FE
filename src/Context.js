import React, { useReducer, createContext, useContext, useRef } from 'react';

const mylist = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.item);
    case 'TOGGLE':
      return state.map(list =>
        list.id === action.id ? { ...list, done: !list.done } : list
      );
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StateContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, mylist);
  const nextId = useRef(1);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NextIdContext.Provider value={nextId}>
          {children}
        </NextIdContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}

export function useNextId() {
  const context = useContext(NextIdContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}