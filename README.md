# README

# Tasker 
### Tasker clones TaskRabbit, a web application to view and book taskers for various tasks.
![image](https://user-images.githubusercontent.com/41526816/59969836-b553b000-9525-11e9-8152-c2d052e83f2c.png)
    
# Site
[Live] (https://taskerrrr.herokuapp.com/#/)

# Technologies
   * React
   * Redux
   * JavaScript
   * PostgreSQL
   * Ruby
   * Rails
   * Webpack
   * HTML5
   * CSS3

# Features 

### Search for and select a task 
![image](https://user-images.githubusercontent.com/41526816/60967561-fcdd8880-a2e8-11e9-999d-95b14b6c26cc.png)

#### Code Snippet: fuzzy search
Fuzzy search involves searching the task category for matching substrings(user-entered), of any case 
```javascript
        if (this.state.search) {
            return this.props.categories.map(category => {
                if (category.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return <Link to={`/categories/${category.id}`} key={category.id}>{category.title}</Link>
                }
            })
        }
```

### Book a task
![image](https://user-images.githubusercontent.com/41526816/62057468-b5faf880-b1ed-11e9-95bb-0d1cdaab08f9.png)

#### Code Snippet: pass local state information from child to parent component when booking task
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

//Parent interacts with child components through composition (not inheritance)
    return (
        <div className="taskform">
            <header className="mainnav">
                <nav className="leftnav">
                    <ul>
                        <li><Link to='/'>Tasker</Link></li>
                    </ul>
                </nav>
            </header>
            <nav>
                <TaskLowerNavFill />
            </nav>
            <main>
                <h1>{this.props.category.title}</h1>
                <section>
                    <TaskInterest handleData={this.handleParentData}/>
                </section>
                <section>
                    <TaskLocation handleData={this.handleParentData} start_address={this.state.start_address}/>
                </section>
                <section>
                    <TaskOptions handleData={this.handleParentData} />
                </section>
                <section>
                    <TaskDetail handleData={this.handleParentData} />
                </section>
            </main>
        </div>
    )
```

### Select a tasker
![image](https://user-images.githubusercontent.com/41526816/62057736-37eb2180-b1ee-11e9-89f3-519b596b15a7.png)

#### Code Snippet: join table
A tasker has many task abilities.  This association requires a join table of tasker and task category to enable selection of appropriate taskers for the task. 

```ruby
create_table "tasker_cats", force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "user_id", null: false
    t.integer "hourly_rate", null: false
    t.string "skills_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
end

class TaskerCat < ApplicationRecord
    validates :category_id, :user_id, :skills_description, :hourly_rate, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end
```

### View and cancel your tasks as needed
![image](https://user-images.githubusercontent.com/41526816/62057912-80a2da80-b1ee-11e9-94ef-b3c15ef560b2.png)

#### Code Snippet: AJAX request
Canceling a task requires an AJAX request to the backend to delete the task from the database, and an action to reflect the change in the state.  

```javascript
// action to remove task from database and from state
export const cancelTask = (id) => dispatch => {
    return deleteTask(id).then(task => dispatch(removeTask(task.id)));
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
}
const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    const { task, tasks, id } = action;

    switch (action.type) {
        case RECEIVE_TASK:
            return merge({}, state, { [task.id]: task });
        case RECEIVE_TASKS:
            return tasks;
        case REMOVE_TASK:
            let newState = merge({}, state);
            delete newState[id];
            return newState;
        default:
            return state;
    }
};
// remove task from database
export const deleteTask = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tasks/${id}`
    })
}
```








