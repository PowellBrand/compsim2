import axios from 'axios';
const initialState = {
    title:'',
    author: '',
    inStock: ''
}
const GET_BOOKS = 'GET_BOOKS';

function getAllBooks(){
    let books = axios.get(`/api/getBooks`).then(res =>{
        console.log(res.data, "Here are your books smarty pants")
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: books
    }
}


function reducer(state = initialState, action){
    switch (action.type){
        case GET_BOOKS + '_FULFILLED':
        return Object.assign({}, state, {title: action.payload})
    }
}

export default reducer;