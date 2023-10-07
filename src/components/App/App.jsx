import { Container, Header, SearchForm, Section, Text } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
