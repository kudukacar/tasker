# README

# Tasker 
    Tasker clones TaskRabbit, a web application to view and book taskers for various tasks.
![image](https://user-images.githubusercontent.com/41526816/59969836-b553b000-9525-11e9-8152-c2d052e83f2c.png)
    
# Site
[Live](https://taskerrrr.herokuapp.com/#/)

# Technologies
   * PostgreSQL
   * Ruby
   * Rails
   * Webpack
   * JavaScript
   * Redux
   * React
   * HTML5
   * CSS3

# Features 
   * Authenticated users on the frontend with React Router and the backend with BCrypt, allowing users to only access and make changes to     their own tasks.  
   * Created Active Record associations to extract tasker data from multiple tables in a single Ajax request, avoiding inefficient database   queries and improving user’s experience.
   * Incorporated React’s virtual DOM and Redux’s global store to seamlessly share and render information across multiple components when     booking a task.

# Code Snippets

## Pass local state information from child to parent component when booking task
Booking a task in TaskRabbit requires multiple steps and information over seamingly multiple pages.  To accomplish this effect, the task form (the parent component) consists of many child components.  Each child component collects a piece of data. The child components update the parent component at each step of the process (i.e. submission of child form components).  All data, stored at the parent component, informs creation of a task.     

```javascript
// First passed a function, handleData from parent to child component
    handleParentData(data) {
       this.setState(data);
    }

    <TaskOptions handleData={this.handleParentData} />

// On click, updates the child component's state, and uses the handleData function to pass task data (local state) from a child component to a parent component and change the local state (task data) of the parent
    if (this.state.size) {
        this.setState({ complete: true }, () => {
            this.props.handleData({ size: this.state.size });
        });

    }
```




