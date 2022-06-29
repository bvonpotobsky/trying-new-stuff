import { RecoilRoot } from "recoil";

import TodoList from "./containers/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
export default App;
