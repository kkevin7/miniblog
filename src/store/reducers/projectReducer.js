const initState = {
    projects: [
        {id: '1', title: 'Como usar Laravel', content: 'Laravel es un framework de PHP'},
        {id: '2', title: 'Razones para usar CodeIgniter', content: 'CodeIgniter es un framework'},
        {id: '3', title: 'Como hackear Mobox de en 5 minutos', content: 'Guia de simples pasos'}
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT': 
        console.log('create project', action.project);
    }
    return state
}

export default projectReducer