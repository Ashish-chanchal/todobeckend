const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const upadateTodo = zod.object({
    id: zod.string(),
    
});

module.exports = {
    createTodo: createTodo,
    upadateTodo: upadateTodo,
}