const { response } = require('express');


const getUser = (req,res = response) => {
    const {id} = req.body;
    res.json({
        msg: 'GET - from API controller',
        user: `Usuario con id: ${id}`
    });
}

const postUser = (req,res = response)=> {
    res.json({
        msg: 'POST - from API controller'

    });
}

const putUser = (req,res = response)=> {
    const {id} = req.body;
    res.json({
        msg: 'PUT - from API controller'
        
    });
}

const deleteUser = (req,res = response)=> {
    const {id} = req.body;
    res.json({
        msg: 'DELETE - from API controller'
    });
}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
}
