import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';


import { Adminlayout } from './featurecomponent/admin-layout/admin-layout.component';
import { Approute } from './app.route';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Adminlayout></Adminlayout>
{/* <Approute></Approute> */}
      </BrowserRouter>
       
    </div>
  );
}

export default App;
