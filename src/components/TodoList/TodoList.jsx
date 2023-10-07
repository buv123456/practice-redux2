import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectVisibleTodos } from 'redux/selectors';

export const TodoList = () => {
  const todos = useSelector(selectVisibleTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};
