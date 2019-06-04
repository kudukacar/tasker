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
        const categories = this.props.categories.map(category => <Link to={`/categories/${category.id}`} key={category.id}><button>{category.title}</button></Link>);


        if (this.state.mode === 'See Less') {
            return (
                <div className="cats">
                    <div>
                        {categories.slice(0, 5)}
                    </div>
                    <div>
                        {categories.slice(5, 9)}
                    </div>
                    <div>
                        {categories.slice(9, 13)}
                    </div>
                    <div>
                        {categories.slice(13, 18)}
                    </div>
                    <div>
                        {categories.slice(18, 20)}
                        <span onClick={this.handleClick}>See Less</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cats">
                    <div>{categories.slice(0, 5)}</div>
                    <div>
                        {categories.slice(5, 7)}
                        <span onClick={this.handleClick}>See More</span>
                    </div>
                </div>
            )

        }

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInCats));