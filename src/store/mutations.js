export const mutations = {
  editCompanyName(state, companyName) {
    state.companyName = companyName.companyName.value;
  },

  editSpend(state, editingInput) {
    state[editingInput.editingInputName] = editingInput.editingInputValue;
  },

  addTodo(state, todo) {
    state.todos.push(todo);
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text;
    todo.done = done;
  }
};
