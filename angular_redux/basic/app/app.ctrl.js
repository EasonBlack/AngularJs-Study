import TodoActions from '../actions/todo.action';

class AppCtrl {
    constructor($ngRedux) {

        this.todo = '';
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
    }

    submitTodo(){
        this.addTodo(this.todo);
        this.todo = '';
    }

    $onDestroy(){
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            todos: state.todos
        };
    }
}

AppCtrl.$inject = ["$ngRedux"];

export default AppCtrl;