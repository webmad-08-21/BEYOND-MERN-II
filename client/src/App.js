import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';
import { Component } from 'react';
import AuthService from './services/auth.service';
import Routes from './components/routes';
import Alert from './components/shared/Alert/Alert';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      alert: {
        show: false,
        text: ""
      }
    }
    this.authService = new AuthService()
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  showAlert = (text) => this.setState({ ...this.state, alert: { show: true, text } })

  storeUser = (user) => this.setState({ loggedUser: user })
  fetchUser = () => {
    this.authService.isloggedin()
      .then(res => this.storeUser(res.data))
      .catch(err => this.storeUser(null))
  }

  render = () => {
    return (
      <>
        <Navigation showAlert={this.showAlert} loggedUser={this.state.loggedUser} storeUser={this.storeUser} />
        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <Footer />
        <Alert text={this.state.alert.text} closeAlert={() => this.setState({ ...this.state, alert: { show: false, text: "" } })} show={this.state.alert.show} />
      </>
    );
  }
}

export default App;
