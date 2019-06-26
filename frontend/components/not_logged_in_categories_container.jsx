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
        this.state = {
            search: "",
            click: "closed",
        };
    }

    componentDidMount() {
        this.props.getCategories();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, () => {
                if(this.state.search) {
                    this.setState({click: "open"});
                } else {
                    this.setState({click: "closed"});
                }
            });
        };
    }

    searchInput() {
        if(this.state.search) {
            return this.props.categories.map(category => {
                if (category.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return <Link to='/loginsignup' key={category.id}>{category.title}</Link>
                }
            })
        }

    }


    render() {
        const categories = this.props.categories.map(category => <Link to='/loginsignup' key={category.id}><button>{category.title}</button></Link>);

            return(
                <div className="cats">
                    <div>{categories.slice(0, 3)}</div>
                    <div>
                        {categories.slice(3, 6)}
                    </div>
                    <div className="catsinput">
                        <input type="text"
                            value={this.state.search}
                            onChange={this.update('search')}
                            placeholder="Need something different" />
                        <div className={this.state.click}>{this.searchInput()}</div>
                    </div>
                </div>
            )

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotLoggedInCats));