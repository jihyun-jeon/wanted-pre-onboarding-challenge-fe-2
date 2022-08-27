/**
 * Represents a todoitem
 * @constructor
 * @param {Object} todoData - The data about todo
 * @param {number} todoData.id - The id of todoItem
 * @param {string} todoData.content - The content of todoItem
 * @param {boolean} todoData.completed - The completed of todoItem
 * @param {string} todoData.category - The category of todoItem
 * @param {string[]} todoData.tags - The tags of todoItem
 */
function Todo(todoData) {}

/**
 * TodoItem를 만든다
 * @param {string} [content] - 할 일의 내용
 */
function CREATE(content) {}

/**
 * TodoList를 요청한다.
 * @param {number} [id] - 할 일의 id
 */
function READ(id) {}

/**
 * TodoItem를 수정한다.
 * @param {Object} todoData - 수정을 원하는 할 일 데이터
 * @param {number} todoData.id - 수정을 원하는 할 일의 id값
 * @param {string} [todoData.content] - 수정을 원하는 할 일의 내용
 * @param {boolean} [todoData.completed] - 수정을 원하는 할 일의 완료여부
 * @param {string} [todoData.category] -  수정을 원하는 할 일의 카테고리
 * @param {string[]} [todoData.tags] -  수정을 원하는 할 일의 태그
 */
function UPDATE(todoData) {}

/**
 * TodoItem를 삭제한다.
 * @param {number} [id] - 할 일의 id
 */
function DELETE(id) {}
