import React from 'react';

export default function CreateMeow(){

    function handleSubmit(e) {
        e.preventDefault();

        // fetch(
        //     `https://cyf-cors-api.herokuapp.com/meow`,{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             text: (text ),
        //     hashtags: (hashtags )

        //         })

    //         }

    //     )
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <textarea></textarea>
            </label>
            <input type="text"/>
        </form>
    )

}