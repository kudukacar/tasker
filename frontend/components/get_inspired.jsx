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

class GetInspired extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { mode: 'See Less' };
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
        const categories = this.props.categories.map(category => <li key={category.id}>Book {category.title}</li>);

        if (this.state.mode === 'See More') {
            return (
                <section className="getinspired">
                    <div className="getinspiredtitle">Get Inspired</div>
                    <div className="getinspiredfirst">
                        <img className="getinpiredimg1"src="https://www.dogpanting.info/i/2019/02/coat-bags-for-depot-hanging-hallway-world-hangers-solutions-wardrobe-modern-racks-seen-boxes-winning-bins-wall-garage-howards-hook-storage-ideas-home-pocketbook-clothes.jpg" />
                        <div>
                            <div className="getinspiredfirstsubtitle">Tackle those home project &amp; repairs you've been putting off</div>
                            <div className="getinspiredprice"><i className="fas fa-tag"></i>Avg. Project: $46 - $127</div>
                            {categories.slice(5,6)}
                        </div>
                    </div>
                    <div className="getinspiredsecond">
                        <span className="fasstart"><i className="fas fa-angle-up"></i></span>
                        <div>
                            <img className="getinspiredimage2" src="https://static.onecms.io/wp-content/uploads/sites/37/2019/01/15230952/neutral-gray-and-white-living-room-striped-floor-rug-594af4cd.jpg" />
                            <div className="getinspiredothersubtitle">Mount a TV or mirror</div>
                            <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $53 - $118</div>
                            {categories.slice(2,3)}
                        </div>
                        <div>
                            <img className="getinspiredimage2" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/37/white-bedroom.jpg" />
                            <div className="getinspiredothersubtitle">Put together furniture</div>
                            <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $47 - $124</div>
                            {categories.slice(1,2)}
                        </div>
                        <div>
                            <img className="getinspiredimage2" src="https://www.westelm.com/weimgs/ab/images/wcm/products/201922/0082/monroe-mid-century-leather-sofa-80-o.jpg" />
                            <div className="getinspiredothersubtitle">Lift &amp; shift heavy items</div>
                            <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $47 - $125</div>
                            {categories.slice(0,1)}
                        </div>
                        <span className="fasend"><i onClick={this.handleClick} className="fas fa-angle-up"></i></span>
                    </div>
                </section>
            )
            } else {
                return (
                    <section className="getinspired">
                        <div className="getinspiredtitle">Get Inspired</div>
                        <div className="getinspiredfirst">
                            <img className="getinpiredimg1" src="https://www.dogpanting.info/i/2019/02/coat-bags-for-depot-hanging-hallway-world-hangers-solutions-wardrobe-modern-racks-seen-boxes-winning-bins-wall-garage-howards-hook-storage-ideas-home-pocketbook-clothes.jpg" />
                            <div>
                                <div className="getinspiredfirstsubtitle">Tackle those home project &amp; repairs you've been putting off</div>
                                <div className="getinspiredprice"><i className="fas fa-tag"></i>Avg. Project: $46 - $127</div>
                                {categories.slice(5, 6)}
                            </div>
                        </div>
                        <div className="getinspiredsecond">
                            <span className="fasstart2"><i onClick={this.handleClick} className="fas fa-angle-up"></i></span>
                            <div>
                                <img className="getinspiredimage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoaiHMlJBwaVZUXrdzVlc86YI_URE2u9gkaRzwyyYjqt3MQXufg" />
                                <div className="getinspiredothersubtitle">Get a sparkling home</div>
                                <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $53 - $118</div>
                                {categories.slice(4, 5)}
                            </div>
                            <div>
                                <img className="getinspiredimage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhR1wUHMhh6KDUpZ2cD2kN-5EtS1PV08LXYhYx3HYgExXvGWEIMQ" />
                                <div className="getinspiredothersubtitle">Maintain outside spaces</div>
                                <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $47 - $124</div>
                                {categories.slice(8, 9)}
                            </div>
                            <div>
                                <img className="getinspiredimage2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_15fKY2istZJhLxSk9ZbA6rNHqdVcoZEg9VLEHW3XDZtavaiINg" />
                                <div className="getinspiredothersubtitle">Make minor repairs</div>
                                <div className="getinspiredprice"><i className="fas fa-tag"></i> Avg. Project: $47 - $125</div>
                                {categories.slice(3, 4)}
                            </div>
                            <span className="fasend2"><i className="fas fa-angle-up"></i></span>
                        </div>
                    </section>

                )
                
            }

        }

    }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetInspired));