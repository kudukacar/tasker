import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/category_actions';

const mapStateToProps = (state) => ({
    categories: Object.values(state.categories),
});

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
});

class LoggedInCats extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { mode: 'See More' };
    }

    componentDidMount() {
        this.props.getCategories();
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.mode === 'See Less') {
            this.setState({ mode: 'See More' });
        } else {
            this.setState({ mode: 'See Less' });
        }
    }

    render() {
        const categories = this.props.categories.map(category => <li key={category.id}>{category.title}</li>);


        if (this.state.mode === 'See Less') {
            return (
                <div className="cats">
                    <ul>
                        {categories.slice(0, 5)}
                    </ul>
                    <ul>
                        {categories.slice(5, 9)}
                    </ul>
                    <ul>
                        {categories.slice(9, 13)}
                    </ul>
                    <ul>
                        {categories.slice(13, 18)}
                    </ul>
                    <ul>
                        {categories.slice(18, 20)}
                        <span onClick={this.handleClick}>See Less</span>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="cats">
                    <ul>{categories.slice(0, 5)}</ul>
                    <ul>
                        {categories.slice(5, 7)}
                        <span onClick={this.handleClick}>See More</span>
                    </ul>
                </div>
            )

        }

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInCats));