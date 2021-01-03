import {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';

const TodoContext = createContext();

const {Provider} = TodoContext;

export const FinalTodo = ({children}) => {
  const [listTodos, setListTodos] = useState({});

  const handleSubmit = inputValue => {
    setListTodos({
      ...listTodos,
      [inputValue]: {name: inputValue, isDone: false},
    });
  };

  const toogleTodo = ({target: {name}}) => {
    setListTodos({
      ...listTodos,
      [name]: {
        ...listTodos[name],
        isDone: !listTodos[name].isDone,
      },
    });
  };

  const getTodoValues = () => Object.values(listTodos);

  const valuesProvider = {
    handleSubmit,
    toogleTodo,
    getTodoValues,
  };

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <Provider value={valuesProvider}>{children}</Provider>
    </div>
  );
};

export const TodoTitle = ({children}) => <header>{children}</header>;

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  const {handleSubmit} = useContext(TodoContext);

  const handleInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const _handleSubmit = e => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={_handleSubmit}>
      <label>
        New todo:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export const TodoList = () => {
  const {toogleTodo, getTodoValues} = useContext(TodoContext);

  const list = getTodoValues();

  return (
    <ul>
      {list.map(({name, isDone}) => (
        <li key={name}>
          <label>
            <input
              name={name}
              type="checkbox"
              checked={isDone}
              onChange={toogleTodo}
            />
            <span style={{textDecoration: isDone ? 'line-through' : ''}}>
              {name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

FinalTodo.Title = TodoTitle;
FinalTodo.Form = TodoForm;
FinalTodo.List = TodoList;

FinalTodo.propTypes = {
  children: PropTypes.node.isRequired,
};
