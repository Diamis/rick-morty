import Characters from "./components/Characters";
import CurrentCharacter from "./components/CurrentCharacter";

const App = () => {
  return (
    <div className="bg-sky-800 min-h-screen">
      <div className='max-w-screen-2xl mx-auto my-0 p-5 flex'>
        <Characters />
        <CurrentCharacter />
      </div>
    </div>
  );
}

export default App;
