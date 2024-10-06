const express = require('express');
const { createTodo,upadateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();
app.use(cors({
  }));


app.use(express.json());

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:'You sent the invalid data',
        })
        return;
    } 
    
    //put it in the database

    await todo.create({
        title:parsedPayload.data.title,
        description:parsedPayload.data.description,
        completed:false,
    })

    res.json({
        msg:'Todo created successfully',
    })


})
app.get('/todos', async(req, res) => {
    const todos = await todo.find({});
    res.json({
        todos:todos,
    })

})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = upadateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:'You sent the invalid data',
        })
        return;
    } 
    await todo.updateOne({
        _id:parsedPayload.data.id,
    },{
        completed:true,
    })

    res.json({
        msg:'Todo updated successfully',
    })
})

app.delete('/delete', async (req, res) => {
    const deletePayload = req.body;
    const parsedPayload = upadateTodo.safeParse(deletePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:'You sent the invalid data',
        })
        return;
    } 
    await todo.deleteOne({
        _id:parsedPayload.data.id,
    })

    res.json({
        msg:'Todo deleted successfully',
})
})

app.listen(3000)