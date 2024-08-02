import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UsersView from "./features/users/UsersView";

function App() {
  return (
    <div id="appPageId">
      <UsersView />
      <CakeView />
      <IcecreamView />
    </div>
    //
  );
}

export default App;
