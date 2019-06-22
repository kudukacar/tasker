# README

# Tasker 
    Tasker clones TaskRabbit, a web application to view and book taskers for various tasks.

![image](https://user-images.githubusercontent.com/41526816/59969836-b553b000-9525-11e9-8152-c2d052e83f2c.png)

# Site
    https://taskerrrr.herokuapp.com/#/

# Technologies
   * PostgreSQL
   * Ruby on Rails
   * JavaScript
   * Redux
   * React
   * HTML
   * CSS

# Features 
   * Authenticated users on the frontend with React Router and the backend with BCrypt, allowing users to only access and make changes to     their own tasks.  
   * Created Active Record associations to extract tasker data from multiple tables in a single Ajax request, avoiding inefficient database   queries and improving user’s experience.
   * Incorporated React’s virtual DOM and Redux’s global store to seamlessly share and render information across multiple components when     booking a task.

# Code Snippets

## Pass information from child to parent component

### First passed a function, handleData from parent to child component
```javascript

    handleParentData(data) {
       this.setState(data);
    }

    <TaskOptions handleData={this.handleParentData} />
```

### Used the handleData function to pass task data (local state) from a child component to a parent component and change the local state (task data) of the parent 
```javascript

    this.setState({ complete: true }, () => {
        this.props.handleData({ size: this.state.size });
    });
```




