import React, { Component } from 'react';
import ViewNotesContainer from './components/ViewNotes/ViewNotesContainer';
import CreateNoteContainer from './components/CreateNotes/CreateNoteContainer';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from "axios";

class App extends Component {
constructor(props){
super(props);
	this.state={
		notes: [] 
	};
}  
	
componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }





componentDidUpdate(prevpProps,  prevState) {
if (prevState.notes !== this.state.notes){

	axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
	

	
render() {
    return (
      <div className="App">
      	<Route exact  path="/" render={(props) => <ViewNotesContainer {...props} notes={this.state.notes} />} />
        <Route exact path="/createnewnote" render={() => <CreateNoteContainer addNoteHandler={this.addNoteHandler} notes={this.state.notes} />} />	    
      </div>
    );
  }
}

export default App;
