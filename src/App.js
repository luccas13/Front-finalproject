import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

// My components
import NavBar from "./components/NavBar/NavBar";
import Home from './views/Home';
import VaccinationPlaces from './views/VaccinationPlaces/VaccinationPlaces';
import VaccinationPlace from './views/VaccinationPlace/VaccinationPlace';
import Appointment from './views/Appointment/Appointment';
import CreateView from './views/CreateView/CreateView';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout" >
      <Header>
        <NavBar/>
      </Header>
      <Content className='content' >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vaccination-places" component={VaccinationPlaces} />
          <Route exact path="/vaccination-places/:id" component={VaccinationPlace} />
          <Route exact path="/appointments" component={Appointment} />
          <Route exact path="/appointments/create" component={CreateView} />
          {/* <Route exact path="/appointments/:id" component={AppointmentForm} /> */}
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
