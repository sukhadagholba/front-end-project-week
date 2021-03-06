import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router-dom';

import LambdaLeftDiv from '../components/ViewNotes/LambdaLeftDiv';


Enzyme.configure({ adapter: new Adapter() });

describe('<LambdaLeftDiv />', () => {


it('renders without crashing', () => {
        shallow(<LambdaLeftDiv />);
});


it('should render a div', () => {

        const app = shallow(<LambdaLeftDiv />);

        const div = app.find('.left-div');
        expect(div.length).toBe(1);

});


it('should render the Header Component', () => {

        const app = shallow(<LambdaLeftDiv />);

        const header = app.find('.lambda-notes-header');
        expect(header.text()).toEqual('Lambda Notes');

});


it('should render two divs', () => {

        const app = shallow(<LambdaLeftDiv />);
        
        const div = app.find('.teal-div');
        expect(div.length).toBe(2);
        
});

});
