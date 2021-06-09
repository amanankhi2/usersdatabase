import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchUser: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  handleChange = (e) => {
    this.setState({ searchUser: e.target.value });
  };

  render() {
    const { users, searchUser } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="heading">Company Database</h1>
        <SearchBox
          placeHolder="Search for User"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
