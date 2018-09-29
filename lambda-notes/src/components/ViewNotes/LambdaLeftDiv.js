import React from 'react';
import {Link} from 'react-router-dom';

const LambdaLeftDiv = (props) => {

	return(
		<div className="left-div">
		<h1 className="lambda-notes-header">Lambda Notes</h1>
		<div  onClick={()=>{props.viewNotesHandler()}}  style={{ textDecoration: 'none' }} to="/notes"><div className="teal-div">View Your Notes</div></div>
		<Link  style={{ textDecoration: 'none' }} to="/add"><div className="teal-div">+ Create New Note</div></Link>
		</div>
	);
};




export default LambdaLeftDiv;



