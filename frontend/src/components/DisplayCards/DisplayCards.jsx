import { useContext } from 'react'
import './DisplayCards.css'
import { StoreContext } from '../../context/StoreContext'
import Card from '../Card/Card'

const DisplayCards = () => {
    const {usersData} = useContext(StoreContext)
    console.log(usersData);
    
  return (
    <div className='display-cards'>
        <h2>Users List</h2>
        <div className="display-users-list">
            {
                usersData.map((user, idx)=>{
                    return (<Card key={idx} id={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} company={user.company.name}/>  )
                })
            }
        </div>
    </div>
  )
}

export default DisplayCards