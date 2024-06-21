import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <div>
      { alertVisable && <Alert onClose={() => setAlertVisability(false)}>My alert</Alert>}
      <Button color='danger' onClick={() => setAlertVisability(true)}>My Button</Button>
    </div>
  );
}

export default App;
