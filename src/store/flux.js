const getState = ({ getStore, getActions, setStore }) => {
    const backendUrl = 'http://localhost/5000'
    return {
        store: {
            registerFormData: {
                username: '',
                email: '',
                password: ''
            },
            loginFormData: {
                username: '',
                password: ''
            },
        },
        actions: {
            
        }
    };
};

export default getState;