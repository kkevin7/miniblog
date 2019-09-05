export const createProject = (project) => {
    return( dispatch, getState) => {
        //hacer una llamada asincrona a la base de datos
        dispatch({type: 'CREATE_PROJECT', project});
    }
};