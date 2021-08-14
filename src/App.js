import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

// My components
import NavBar from "./components/NavBar/NavBar";
import Home from './views/Home';
import VaccinationPlaces from './views/VaccinationPlaces/VaccionationPlaces';
import Appointment from './views/Appointment/Appointment';

const { Header, Footer, Content } = Layout;

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
          <Route exact path="/appointments" component={Appointment} />
        </Switch>
      </Content>
      <Footer style={footer}>
        <p>Application for educational purposes ©2021. Created by: Lucas Oscar Bracco.</p>
      </Footer>
    </Layout>
  );
}

const content = {
  'height': '100vh',
  'padding': '20px',
};

const footer = {
  'color': '#000',
  'background': '#bbb',
  'textAlign': 'center',
}

export default App;
