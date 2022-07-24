import { Provider } from 'react-redux';
import { HomePage } from './Pages/HomePage/HomePage';
import { store } from './redux';
import styled from 'styled-components';
import Flex from './components/Flex/Flex';

const SContainer = styled(Flex).attrs(() => ({
  grow: 1,
  direction: 'column',
}))`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;

const App = () => {
  return (
    <Provider store={store}>
      <SContainer className="App">
        <HomePage />
      </SContainer>
    </Provider>
  );
};

export default App;
