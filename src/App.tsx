
import Header from './components/Layout/Header';
import Screen from './components/Screen/Screen';

function App () {
  return (
    <div className='flex flex-col mx-auto w-full h-full gap-6'>
      <Header />
      <Screen />
    </div>
  );
}

export default App;