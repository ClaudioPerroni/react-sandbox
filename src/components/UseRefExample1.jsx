import React from 'react'
import { useRef } from 'react'

function UseRefExample1() {

    const inputRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <label htmlFor="name">Nome</label> 
                <input type="text" id="nome" ref={inputRef} className="form-control mb-2" />

                <button type="submit" className="btn btn-primary">Invia</button>
            </form>

        </div>
    )
}

export default UseRefExample1