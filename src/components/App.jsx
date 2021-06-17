import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";
import FetchMoreComponent from './FetchMoreButton/fetchMore';

const App = () => {
  const [content, search, fetchMore] = useFetchContent();

  return (
    <div className="App">
      <Header onSearch={search} />
      <h1>Simple content list</h1>

      <ContentList content={content}/>
      <FetchMoreComponent fetchMore={fetchMore} content={content} />
    </div>
  );
};

export default App;
 