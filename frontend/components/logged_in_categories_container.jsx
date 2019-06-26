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
        this.state = { 
            mode: 'See More',
            search: "",
            click: "closed", 
        };
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
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, () => {
                if (this.state.search) {
                    this.setState({ click: "open2" });
                } else {
                    this.setState({ click: "closed" });
                }
            });
        };
    }
    searchInput() {
        if (this.state.search) {
            return this.props.categories.map(category => {
                if (category.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return <Link to={`/categories/${category.id}`} key={category.id}>{category.title}</Link>
                }
            })
        }

    }

    render() {
        const categories = this.props.categories.map(category => <Link to={`/categories/${category.id}`} key={category.id}><button>{category.title}</button></Link>);


        if (this.state.mode === 'See Less') {
            return (
                <div className="cats2">
                    <div className="catsinput2">
                        <input type="text"
                            value={this.state.search}
                            onChange={this.update('search')}
                            placeholder="Describe one task, e.g. fix the hole in my wall" />
                        <div className={this.state.click}>{this.searchInput()}</div>
                    </div>
                    <div>
                        {categories.slice(0, 5)}
                    </div>
                    <div>
                        {categories.slice(5, 10)}
                    </div>
                    <div>
                        {categories.slice(10, 15)}
                    </div>
                    <div>
                        {categories.slice(15, 20)}
                        <span onClick={this.handleClick}>See Less</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cats2">
                    <div className="catsinput">
                        <input type="text"
                            value={this.state.search}
                            onChange={this.update('search')}
                            placeholder="Describe one task, e.g. fix the hole in my wall" />
                        <div className={this.state.click}>{this.searchInput()}</div>
                    </div>
                    <div>{categories.slice(0, 5)}</div>
                    <div>
                        {categories.slice(5, 6)}
                        <span onClick={this.handleClick}>See More</span>
                    </div>
                </div>
            )

        }

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInCats));