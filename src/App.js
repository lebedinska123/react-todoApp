import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => {return import('./Todo/AddTodo')});

function App() {
	const [todos, setTodos] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(todos => {
				setTimeout(() => {
					setTodos(todos);
					setLoading(false);
				}, 2000)
			});
	}, []);

	function onToggle(id) {
		setTodos(
			todos.map(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		)
	}

	function removeTodo(id) {
		setTodos(
			todos.filter(item => 
				item.id !== id
			)
		);
	}

	function addTodo(value) {
		setTodos(
			todos.concat([{title: value, completed: false, id: Date.now()}])
		)
	}

	return (
		<Context.Provider value={{removeTodo}}>
			<div className="wrapper">
				<h1>Items list</h1>
				<Modal/>
				<React.Suspense fallback={<p>Loading...</p>}>
					<AddTodo onCreate={addTodo}/>
				</React.Suspense>
				{loading && <Loader/>}
				<TodoList todos={todos} handler={onToggle} loading={loading}/>
			</div>
		</Context.Provider>
	);
}

export default App;