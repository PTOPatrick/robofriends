import React from "react";
import CardList from "../components/CardList.js";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        const fetchedRobots = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        this.setState({
            robots: fetchedRobots
        });
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value

        });
        return true;
    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(user => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? <h1>Loading...</h1> : 
            (<div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>);
    }
};

export default App;