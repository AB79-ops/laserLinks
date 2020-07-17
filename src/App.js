import React from 'react';
import './App.css';
import Footer from "./Components/footer";
import MyInfo from "./Components/MyInfo";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MainContent from "./Components/MainContent";
import Products from "./Components/Products";
import Projects from "./Components/Projects";
import artProducts from "./data/artProducts";
import ProjectsData from "./data/ProjectsData";
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         todos: toDoData,
    //         isLoading: false,
    //         isLoggedIn: false,
    //         character: {},
    //
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //
    //
    // }

    // componentDidMount() {
    //     this.setState({isLoading: true});
    //     fetch("https://swapi.dev/api/people/19")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 isLoading: false,
    //                 character: data
    //             })
    //         });
    // }

    // handleClick() {
    //     this.setState(prevState => {
    //         return {
    //             isLoggedIn: !prevState.isLoggedIn
    //         }
    //     })
    // }

    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         });
    //         console.log(updatedTodos);
    //         return {
    //             todos: updatedTodos
    //         }
    //     })
    // }

    render() {
        const projectComponents = ProjectsData.map(item => <Projects key={item.id} item={item} project={item}/>);
        const productsComponents = artProducts.map(item => <Products key={item.id} product={item}/>);
        // const text = this.state.isLoading ? "Loading..." : this.state.character.name;
        // let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
        // const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        // const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine}/>);


        return (
            <div className="App">
                <Nav/>
                <Header/>
                <MainContent/>
                {/*{!this.state.isLoggedIn ? <h1>Not Logged In</h1> : <Conditional/>}*/}
                {/*<button onClick={this.handleClick}>{buttonText}</button>*/}
                {/*<div className="todo-list">*/}
                {/*    {toDoItems}*/}
                {/*</div>*/}
                {/*<div className="jokes-list">*/}
                {/*    <h3>{jokeComponents}</h3>*/}
                {/*</div>*/}
                <div className="products-list">
                    {projectComponents}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
