import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/icecream/IcecreamView";
import { UserView } from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      <CakeView className="CakeView" />
      <IceCreamView className="IceCreamView" />
      <UserView className="UserView " />
    </div>
  );
}

export default App;
