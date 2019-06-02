// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { getCategories } from '../actions/category_actions';

// const mapStateToProps = (state) => ({
//     categories: Object.values(state.categories),
// });

// const mapDispatchToProps = (dispatch) => ({
//     getCategories: () => dispatch(getCategories),
// });

// class NotLoggedInCats extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = {mode: 'See More'};
//     }

//     componentDidMount() {
//         this.props.getCategories();
//     }

//     handleClick(e) {
//         e.preventDefault();
//         if(this.state.mode === 'See Less') {
//             this.setState({mode: 'See More'});
//         } else {
//             this.setState({mode: 'See Less'});
//         }
//     }

//     render() {
//         const categories = this.props.categories;
//         const firstCats = [];
//         for(let i = 0; i < 5; i++) {
//             firstCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         };
//         const secondHalfCats = [];
//         for (let i = 5; i < 7; i++) {
//             secondHalfCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         }
//         const secondCats = [];
//         for (let i = 5; i < 9; i++) {
//             secondCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         }
//         const thirdCats = [];
//         for (let i = 9; i < 14; i++) {
//             thirdCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         }
//         const fourthCats = [];
//         for (let i = 14; i < 18; i++) {
//             fourthCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         }
//         const fifthCats = [];
//         for (let i = 18; i < 20; i++) {
//             fifthCats.push(<li key={categories[i].id}>{categories[i].title}</li>);
//         }


//         if(this.state.mode === 'See Less') {
//             return (
//                 <div>
//                     <ul>
//                         {firstCats}
//                     </ul>
//                     <ul>
//                         {secondHalfCats}
//                         <a onClick={this.handleClick}>{this.state.mode}</a>
//                     </ul>
//                 </div>
//             )
//         } else {
//             return(
//                 <div>
//                     <ul>{firstCats}</ul>
//                     <ul>{secondCats}</ul>
//                     <ul>{thirdCats}</ul>
//                     <ul>{fourthCats}</ul>
//                     <ul>
//                     {fifthCats}
//                     <a onClick={this.handleClick}>{this.state.mode}</a> 
//                     </ul>
//                 </div>
//             )

//         }

//     }
// }


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotLoggedInCats));