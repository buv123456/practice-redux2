import { Container, Header, SearchForm, Section, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFilter, selectIsLoading, selectTodos } from 'redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from 'redux/operations';
import { setFilter } from 'redux/filterSlice';


export const App = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()
    
  useEffect(
      () => { dispatch(fetchTodos()) },
      [dispatch])

  return (
    <>
      <Header />
      <Section>
        <Container>
          <input type='text' value={filter} name='filter' onChange={(evt)=> dispatch(setFilter(evt.target.value))}/>
          <SearchForm />
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
