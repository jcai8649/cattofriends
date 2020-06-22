import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import {cats} from '../cats';
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component {
    constructor(){
        super();
        this.state = {
            cats: [],
            searchfield: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({cats: cats})});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {searchfield, cats} = this.state;
        const filteredcats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!cats.length)? 
        <h1>Loading...</h1>: 
            (
            <div className="tc">
                <h1 className="f1">CattoFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList cats={filteredcats}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;