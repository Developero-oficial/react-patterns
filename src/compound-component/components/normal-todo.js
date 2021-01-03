import {useState} from 'react';
import PropTypes from 'prop-types';

export const Todo = ({title}) => {
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

  const todoListValues = getTodoValues();

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoTitle>
        <h2>{title}</h2>
      </TodoTitle>
      <main>
        <TodoForm onSubmit={handleSubmit} />
      </main>
      <footer>
        {!todoListValues.length && <p>No todo added yet.</p>}
        <TodoList list={todoListValues} onChange={toogleTodo} />
      </footer>
    </div>
  );
};

const TodoTitle = ({children}) => <header>{children}</header>;

const TodoForm = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
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

const TodoList = ({list, onChange}) => {
  return (
    <ul>
      {list.map(({name, isDone}) => (
        <li key={name}>
          <label>
            <input
              name={name}
              type="checkbox"
              checked={isDone}
              onChange={onChange}
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

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

TodoTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};
