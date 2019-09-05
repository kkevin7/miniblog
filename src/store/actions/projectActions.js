// import { firestore } from "firebase";

export const createProject = (project) => {
    return( dispatch, getState, {getFirebase, getFirestore}) => {
        //hacer una llamada asincrona a la base de datos
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: "Esperanza",
            authorLastName: "de Morales",
            authorId: 12345,
            createAt: new Date()
        }).then( () =>
            dispatch({type: 'CREATE_PROJECT', project}
        )).then( (err) => {
            dispatch({type: 'CREARE_PROJECT_ERROR'}, err)
        });
        
    }
};