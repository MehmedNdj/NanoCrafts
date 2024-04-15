import Contacts from './Contacts';
import MyTextField from './TextField';

function App() {
  return (
    <div>
      <Contacts />
      <div className='button'>
        <MyTextField />
        <MyTextField />
        <MyTextField />
      </div>
    </div>
  );
}

export default App;