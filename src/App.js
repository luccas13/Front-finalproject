import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

// My components
import NavBar from "./components/NavBar/NavBar";
import Home from './views/Home';
import VaccinationPlaces from './views/VaccinationPlaces/VaccionationPlaces';
import VaccinationPlace from './views/VaccinationPlace/VaccionationPlace';
import Appointment from './views/Appointment/Appointment';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout" >
      <Header>
        <NavBar>Hello Word!!!</NavBar>
      </Header>
      <Content style={content} >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vaccination-places" component={VaccinationPlaces} />
          <Route exact path="/vaccination-places/:id" component={VaccinationPlace} />
          <Route exact path="/appointments" component={Appointment} />
        </Switch>
      </Content>
    </Layout>
  );
}

const content = {
  'height': '100vh',
  'padding': '20px',
};

export default App;
