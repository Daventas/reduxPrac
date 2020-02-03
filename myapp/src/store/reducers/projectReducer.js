const initState = {
    projects: [
        {id:'1', title:'first one', content:'blablablabla'},
        {id:'2', title:'second one', content:'blablablabla'},
        {id:'3', title:'third one', content:'blablablabla'}
    ]

}


const projectReducer = (state=initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERRRO':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }

}

export default projectReducer