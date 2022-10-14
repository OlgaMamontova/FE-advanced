import ANAKIN_IMAGE from './index.jpg';
import RAY_IMAGE from './960x0.jpg';
import Post from './components/post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 лют."}
/>
    </div>
  );
}

export default App;
