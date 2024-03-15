import './css/App.css';
import { CssBaseline, Box } from '@mui/material';
// import TodoList from './views/pages/TodoList';
// import TodoListCopy from './views/pages/TodoListCopy';
import WriteBoard from './views/pages/WriteBoard';
import Aside from './views/components/Aside';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Aside />
      <Box>
        {/* <TodoListCopy /> */}
        <WriteBoard />
      </Box>
    </div>
  );
}

export default App;
