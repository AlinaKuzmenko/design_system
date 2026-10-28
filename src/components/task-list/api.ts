const TASKS = [
  { id: '1', title: 'Test Task 1', completed: false },
  { id: '2', title: 'Test Task 2', completed: true },
  { id: '3', title: 'Test Task 3', completed: false },
];

const TASKS_API = 'https://jsonplaceholder.typicode.com/todos.json';

export async function taskLoader() {
  try {
    return await fetch(TASKS_API).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.status.toString());
      }
    });
  } catch (error) {
    return { tasks: TASKS };
  }
}
