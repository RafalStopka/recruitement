import { useState } from "react";

function Grid() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [invalidNameOrSurname, setInvalidNameOrSurname] = useState(false);
    const [maxReachedOut, setMaxReachedOut] = useState(false);

    function removeUser(id) {
        const currentUserList = users.filter(user => user.id !== id);
        setUsers(currentUserList);
        setMaxReachedOut(false);
    }

    const validateForm = (event) => {
        event.preventDefault();
        if(!name || !surname) {
            setInvalidNameOrSurname(true);
            return;
        }
        if (users.length >= 5) {
            setMaxReachedOut(true);
            return;
        
        }
        setInvalidNameOrSurname(false);
        setUsers([...users, {name: name, surname: surname, id: Math.floor(Math.random() * 1000)}]);
    }

    return <div className="grid horizontally-centered">
            <form onSubmit={validateForm}>
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name}></input>
                <input type="text" placeholder="surname" onChange={e => setSurname(e.target.value)} value={surname}></input>
                <input type="submit" value="Add" disabled={maxReachedOut}></input>
            </form>
            <div className="grid-element-a">Pracownicy</div>
            <div className="grid-element-a"></div>
            {users.map(user => {
                return <div>
                    <span className="grid-element-b">{user.name} </span>
                    <span className="grid-element-c">{user.surname}</span>
                    <button onClick={() => {removeUser(user.id)}}>Remove</button>
                </div>
            })}
            <div className="grid-element-d"></div>
            <div className="grid-element-d"></div>
            <div>
               <b>{!invalidNameOrSurname ? '' : 'You cannot add user without name or surname'}</b>.
            </div>
            <div>
               <b>{!maxReachedOut ? '' : 'You cannot add more than 5 users'}</b>.
            </div>
    </div>
}

export default Grid;