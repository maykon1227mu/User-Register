import { useEffect, useState, useRef } from 'react'

import './style.css'
import api from '../../services/api'

function Cads() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }
  async function createUsers() {
    //const usersFromApi = await api.get('/usuarios')
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()

  }


  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='containerCad'>
      <div className='leftBox'>
        <form action="">
          <h1>Cadastro de Usuários</h1>
          <input ref={inputName} placeholder='Nome' type="text" name='nome' />
          <input ref={inputAge} placeholder='Idade' type="number" name='idade' />
          <input ref={inputEmail} placeholder='Email' type="email" name='email' />
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>
      </div>
      <div className='rightBox'>
        {users.map((user) => (

          <div key={user.id} className='card'>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button onClick={() => deleteUsers(user.id)}><i className='bi bi-trash'></i></button>
          </div>


        ))}
      </div>
    </div>
  )
}

export default Cads