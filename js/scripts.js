let IodoItems = [];

function addtudo () {
		


var arr = {
	const todo = {
		text,
		checked: false,
		id: Date.now(),		
	}
	
	TudoItems.push(tudo);
	console.log(TudoItems);
},
	const list = document.querySelector('.js-todo-list');
	list.insertAdjacentHTML('beforeend',`
		<li class= "todo-intem"	data-key="${todo.id}">
			<input id="${todo.id}" data-key="checkbox"/>
			<label for="${todo.id}" class="tick js-tick"></label>
			<span>${todo.text}</span>
			<button class="delete-todo js-delete-todo">
				<svg>
					<use href="#delete-icon"></use>
				</svg>
			</button>
		</li>
	
	
	`)	
	
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
	event.preventDefault();
	const input = document.querySelector('.js-todo-input');
	
	var text = input.value.trim();
	if(text !== ''){
		addTodo(text);
		input.value = "";
		input.focus();
	}
	
	
})