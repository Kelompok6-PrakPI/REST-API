# REST API 
## To Do List API

### Anggota Kelompok : 

1. Farhan Yehanda 201402137
2. Gembira Raymondo Simanullang 201402125
3. Gideon Tulus Hatta Yuda Siahaan 201402116
4. Carel Ralph PA 201402152
5. Abi Rafdi Rahmad 201402131

## BASE_URL = localhost:3000

### getAllTodo
### Enpoint ini berfungsi untuk mengambil semua data todo 

`REQUEST` 

* Method : GET
* ENDPOINT: BASE_URL/todo

`SUCCESS RESPONSE`
```sh
    {   
        status: 200,
        message: "Todo has been found successfully",
        data: todo
    }
```
`ERROR RESPONSE`
```sh
    {   
        status: 404,
        message: "No todos found"
    }
```
```sh
    {   
        status: 500,
        message: "Internal Server Error"
    }
```

### getTodoByID
### Enpoint ini berfungsi untuk mengambil data todo berdasarkan ID

`REQUEST` 

* Method : GET
* ENDPOINT: BASE_URL/todo/:id

`SUCCESS RESPONSE`
```sh
    {   
        status : 200,
        message: "Todo has been found successfully",
        data: todo
    }
``` 
`ERROR RESPONSE`
```sh
    {   
        status : 404,
        message: "Todo with id {id} is not found"
    }
``` 
```sh
    {   
        status: 500,
        message: "Internal Server Error"
    }
```

### addTodo
### Enpoint ini berfungsi untuk menambahkan todo baru

`REQUEST`

* Method : POST
* ENDPOINT : BASE_URL/todo
* Body 

```sh
    {
        name : "String",
        deadline: "YYYY-MM-DD",
        isDone: "boolean" 
    }
```

`SUCCESS RESPONSE`

```sh
    {    
         status : 201,
         message: "Todo has been created",
         data : todo
    }
```
`ERROR RESPONSE`

```sh
    {    
         status : 500,
         message: "Internal Server Error"
    }
```

### deleteTodoById

`REQUEST`

* Method : DELETE
* ENDPOINT : BASE_URL/todo/:id

`SUCCESS RESPONSE`

```sh
    {   
          status : 200,
          message :"Todo has been deleted"
          data : todo
    }
```
`ERROR RESPONSE`
```sh
    {   
        status : 404,
        message: "Todo with id {id} is not found"
    }
``` 
```sh
    {   
        status: 500,
        message: "Internal Server Error"
    }
```

### deleteAllTodo

`REQUEST`

* Method : DELETE
* ENDPOINT : BASE_URL/todo

`SUCCESS RESPONSE`

```sh
    { 
          status: 200,
          message:"todo has been deleted"
    }
```
`ERROR RESPONSE`
```sh
    {   
        status : 404,
        message: "No todos found"
    }
``` 
```sh
    {   
        status: 500,
        message: "Internal Server Error"
    }
```

### updateTodoByID

`REQUEST`

* Method : PUT
* ENDPOINT : BASE_URL/todo/:id
* Body 

```sh
    {
        name : "String",
        deadline: "YYYY-MM-DD",
        isDone: "boolean" 
    }
```

`SUCCESS RESPONSE`

```sh
    status :  200,
    message: "Todo has been updated",
    data : updatedTodo
```
`ERROR RESPONSE`
```sh
    {   
        status : 404,
        message: "Todo with id {id} is not found"
    }
``` 
```sh
    {   
        status: 500,
        message: "Internal Server Error"
    }
```
