// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const url = 'https://jsonplaceholder.typicode.com/todos';
async function createTodo(userId, title, completed) {
  try {
    const response = await fetch(url, {
      method: 'post',
      body: {
        userId,
        title,
        completed,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    const body = await response.json();
    if (body.id !== 201) {
      throw new Error(`id is not 201, ${body.id}`);
    }
    console.log(await body);
    return body;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('createTodo function has been completed');
  }
}

createTodo('82', 'TestSM', false);
