
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import UserComponets from './components/ComponentsRountes/MemberRoutes';
import './App.css'
import AdminComponents from './components/ComponentsRountes/AdminRoutes';


function App() {
  return (
<> 
<UserComponets />
<AdminComponents />
</>
  );
}

export default App;
