import {useState, useEffect} from 'react';

import Authentication from './Components/Authentication';
import MiniBlog from './Components/MiniBlog';

function App() {

  const [userData, setUserData] = useState({});

  return (
    <>
      {Object.keys(userData).length === 0 && <Authentication userData={userData} setUserData={setUserData}/>}
      {Object.keys(userData).length > 0 && <MiniBlog userData={userData} setUserData={setUserData}/>}
      {/* <MiniBlog userData={userData} setUserData={setUserData}/> */}
    </>
  );
}

export default App;
