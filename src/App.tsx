import Preview from "@/components/Preview";
import Cinema from "./components/Cinema/Cinema";

const timeNow = new Date();

const hour = timeNow.getHours();

const App = () => {
  return <div className="app">{hour === 21 ? <Cinema /> : <Preview />}</div>;
};

export default App;
