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

class NotLoggedInCats extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {mode: 'See More'};
    }

    componentDidMount() {
        this.props.getCategories();
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.mode === 'See Less') {
            this.setState({mode: 'See More'});
        } else {
            this.setState({mode: 'See Less'});
        }
    }

    render() {
        const categories = this.props.categories.map(category => <Link to='/loginsignup' key={category.id}><button>{category.title}</button></Link>);


        if(this.state.mode === 'See Less') {
            return (
                <div className="cats">
                    <div>
                        {categories.slice(0, 3)}
                    </div>
                    <div>
                        {categories.slice(3, 6)}
                    </div>
                    <div>
                        {categories.slice(6, 10)}
                    </div>
                    <div>
                        <span onClick={this.handleClick}>See Less</span>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="cats">
                    <div>{categories.slice(0, 3)}</div>
                    <div>
                        {categories.slice(3, 6)}
                    </div>
                    <div>
                        <span onClick={this.handleClick}>See More</span>
                    </div>
                </div>
            )

        }

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotLoggedInCats));