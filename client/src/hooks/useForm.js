import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleFileChange = (e) => {
        console.log(e.name)
        setFormState({ ...formState, 
            [e.name]: e.target.files[0]
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        setFormState,
        formState,
        onInputChange,
        onResetForm,
        handleFileChange
    }
}

/*El código que proporcionas es una arrow function llamada `handleFileChange`. Esta función recibe un evento `e` como argumento. 

La función `console.log` es usada para imprimir el nombre del archivo que ha sido seleccionado en la consola del navegador. 

Luego se llama `setFormState` con un objeto que se crea usando el operador de propagación (`...formState`) para copiar el estado actual del formulario.
El atributo del objeto que se actualiza es `[e.name]` que indica el nombre del campo de entrada del archivo y el valor es el elemento del archivo seleccionado en la posición 0 del arreglo de archivos de la propiedad `target` del evento `e`.

El resultado de esto es que el estado del formulario se actualiza para incluir el archivo seleccionado.*/ 