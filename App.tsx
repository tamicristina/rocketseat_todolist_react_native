import { StatusBar } from "expo-status-bar";

import Home from "./src/screens";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <Home />
    </>
  );
}
