import React from 'react';

import {Todo} from './normal-todo';
import {FinalTodo, TodoTitle, TodoForm, TodoList} from './final-todo';

export const CompoundComponentPage = () => (
  <>
    <h2>Ejemplo sin Compound Component</h2>
    <Todo title="Sin Compound Pattern :o" />
    <hr />

    <h2>Ejemplo con Compound Component</h2>
    <FinalTodo>
      <TodoTitle>
        <h1>Compound Pattern :D</h1>
      </TodoTitle>
      <TodoForm />
      <TodoList />
    </FinalTodo>
  </>
);
