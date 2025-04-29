import usePing from "./hooks/apis/queries/usePing";

import "./App.css";

function App() {
  const { isLoading, data } = usePing();
  if (isLoading) {
    return <>Loading...</>;
  }

  return <>Hello {data.message}</>;
}

export default App;
