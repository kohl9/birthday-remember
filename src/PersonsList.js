import React, {useState} from 'react'

import Person from './Person'

import './personList.css'

export default function PersonsList() {
    const [persons, setPersons] = useState([])

    const [name, setName] = useState('No name')
    const [age, setAge] = useState(0)
    const [avatar, setAvatar] = useState('https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/user_account_profile-2-256.png')

    const resetFormValues = () => {
        setName('No name')
        setAge(0)
        setAvatar('https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/user_account_profile-2-256.png')
    }

    const nameHandleChange = (event) => {
        if (event.target.value.trim() == '') return

        setName(event.target.value)
    }
    const ageHandleChange = (event) => {
        setAge(event.target.value)
    }
    const avatarHandleChange = (event) => {
        setAvatar(event.target.value)
    }

    const AddingHandler = (event) => {
        event.preventDefault()

        setPersons([...persons, {
            name: name,
            age: age,
            avatar: avatar
        }])
        resetFormValues()
    }

    return (
        <div>
            <header>
                <h2>{persons.length} birthdays today</h2>
            </header>

            <div className="list">
                {persons.length === 0 ? <div className="emptyList">There is no persons</div> : ''}
                {
                    persons.map(person => <Person name={person.name} age={person.age} avatar={person.avatar} />)
                }
            </div>

            {persons.length != 0 ? <button type="button" className="btn" onClick={() => setPersons([])}>Clear</button> : ''}
            
            <form onSubmit={AddingHandler}>
                <div>
                    <input placeholder="Name" type="text" onChange={nameHandleChange} />
                </div>
                <div>
                    <input placeholder="Age" type="number" onChange={ageHandleChange} />
                </div>
                <div>
                    <input placeholder="Image link" type="text" onChange={avatarHandleChange} />
                </div>
                <div className="submit-btn">
                    <button type="submit" className="btn">Add</button>
                </div>
            </form>
        </div>
    )
}