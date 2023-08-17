(function(){
    let tasks =[] ;
    const tasksList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const taskcounter = document.getElementById('tasks-counter');
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     //to fetch to do list using API(Application programming interface)
    
    
    
     // async function fectchTodos(){
    // // fetch("https://jsonplaceholder.typicode.com/todos")
    // // .then(function(response){
    // //     console.log(response);
    // //     return response.json();
    // // })
    // // .then(function(data){
    // // console.log(data);
    // // tasks=data.slice(0,10);
    // // renderList();
    // // })
    // // .catch(function(error){
    // //     console.log('error', error);
    // // })
    // try{
    //     const response =await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const data= await response.json();
    //     tasks=data.slice(0,10);
    //     renderList();
        
    // }catch(error){
    // console.log('error', error);
    // }
    
    // }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //to add task to document
    function addTaskToDom(task){
        const li=document.createElement('li');
    
        li.innerHTML=` 
            <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
            <label for="${task.id}">${task.title}</label>
            <img src="bin.jpg" class="delete" data-id="${task.id}" />
        ` ;
    
        tasksList.append(li);
    
    
    }
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // To display list 
    
    function renderList () {
        tasksList.innerHTML='';
        for(let i =0; i<tasks.length ; i++){
            addTaskToDom(tasks[i]);
        }
        taskcounter.innerHTML=tasks.length;
    }
    
    
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // toggle tast upon checking
    function toggleTask(taskId){ 
        const task=tasks.filter(function(task){
            return task.id ==(taskId) 
        })
    if(task.length>0){
        const currentTask=task[0];
        currentTask.completed=!currentTask.completed;
        shownotification("task toggle sucessfull")
        renderList();
        console.log(tasks);
        
        // console.log(tasks);
        return 
    }
    shownotification("cannot toggle ")
    }
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
    //to delete task 
    function deleteTask (taskId) { 
        const newTasks=tasks.filter(function(task){
            return task.id != taskId
        })
    tasks=newTasks;
    renderList();
    shownotification("task deleted succesfully");
    // console.log(tasks);
    
    }
    
    
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // to add task
    function addTask(task) { 
        if(task){
    //         fetch("https://jsonplaceholder.typicode.com/todos" , {
    //             method:'POST',
    //             headers :{
    //                 'Content-Type' : 'application/json',
    
    //             },
    //             body: JSON.stringify(data)
    //         })
    // .then(function(response){
    //     console.log(response);
    //     return response.json();
    // })
    // .then(function(data){
    // console.log(data);
    // tasks.push(task);
    //     renderList();
    //     shownotification("task added sucessfully ");
    
    
    // })
    // .catch(function(error){
    //     console.log('error', error);
    // })
        tasks.push(task);
        renderList();
        shownotification("task added sucessfully ");
        // console.log(tasks);
        return ;
    }
    shownotification('task cannot be added');
    }
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //to show notification
    function shownotification(text) { 
        alert(text);
    }
    
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // handel key press
    function handelInputKeypress(e){
    if(e.key === 'Enter')
    {
    const text =e.target.value;
    if(!text) {
        shownotification('task text cannot be applie')
        return ;
    }
    const task ={
        title : text, 
        id: Date.now().toString(), 
        completed: false
    }
    
    e.target.value='';
    addTask(task);
    
    }
    
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //handle click event 
        function handleClickListner(e){
            let target =e.target;
            console.log(target);
            if(target.className==="delete"){
                const taskId =target.dataset.id;
                console.log("working");
                deleteTask(taskId);
                return ;
            }
        else if(target.className==='custom-checkbox'){
            const taskId =target.id;
            toggleTask(taskId);
            return;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //initilize function
    
    function initilizedApp (){
        // fectchTodos();
        addTaskInput.addEventListener("keyup" , handelInputKeypress);
        window.addEventListener('click', handleClickListner);
    }
    
    initilizedApp();
})()


