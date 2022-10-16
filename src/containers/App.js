import React, { Component } from "react";//!!!
import CardList from '../components/CardList';
// import { robots } from './robots'; toto v dalsi fazi nahrazujeme za https://jsonplaceholder.typicode.com/users, abychom jakoze stahovali z externiho serveru
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';

import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {//!!!pokud mam v kodu state, tak uz je to tzv. smart komponenta a musim pouzit class
    // constructor() {
    //     super()
    //     this.state = {
    //         //robots: robots,//toto by tu nemuselo byt, protoze ted pouzivam roboty ze souboru a nemeni se, ale vyhledove budou z databaze a ta se muze menit, jak se bude neco zadavat taky uzivatelem
    //         robots: [], //kdyz chceme users fetchovat, tak dame tady prazdne pole misto robots a pouzijeme componentDidMount viz nize
    //         searchfield: ""
    //     // po zavedeni reduxu construktor komplet zakomentujeme
    //     }
    // }
    //detaily jsou na netu pod Components Lifecycle Methods; tuto metodu pouzijeme pro natahovani dat z externiho serveru
    // componentDidMount() {//toto je jedna z component metod, stejne jako construktor nebo render, takze ani nevolame arrow funkci
    // fetch("https://jsonplaceholder.typicode.com/users")//natahuju z externiho API; cele je to syntax, netreba nad tim dumat; fetch patri k window object
    //     .then(response => response.json()) //puvodne byla syntaxe s return a {}, ale jde to i bez
    //     .then(users => this.setState({ robots: users }));           //stahujeme usery misto robotu

    // }
    //po aplikaci redux:
    componentDidMount() {
        this.props.onRequestRobots();
    }
    // onSearchChange = (event) => {// !!! puvodne tu mel onSearchChange(event), ale udajne musime takto, aby bylo jasne, k cemu se vztahuje this; pry je to obvykla chyba 
    //     this.setState({ searchfield: event.target.value });//!!! pozor na syntax!!! toto je taky pravidlo - musim nastavit state pomoci setState timto zpusobem

    // } po zavedeni redux zakomentujeme


    //abych nize nedaval tolikrat this.state, tak mohu pomoci destructuring:
    //const {robots, searchfield} = this.state;
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filteredRobots = robots.filter(robot => {
            // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading...</h1> :
            (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ flexDirection: "column" }}>
                        <h1>RoboFriends</h1>
                        {/* <SearchBox searchChange={this.onSearchChange} /> */}
                        {/* po redux mazeme this */}
                        <SearchBox searchChange={onSearchChange} />
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);