import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalContext } from "./context/globalState";
import { removeUser } from "./context/actions/users/userAction";

function App() {
  const {
    usersState: { users },
    addUser,
    editUser,
    usersDispatch
  } = useContext(GlobalContext);
  const [username, setusername] = useState()
  const [editmode, seteditmode] = useState(false)

  const handleSubmit =(e)=> {
    e.preventDefault()
    addUser({id: Math.random(), name:username})
  }

  const handleRemove =(user)=> {
    removeUser(user)(usersDispatch)
  }

  const handleEdit =(e, id)=> {
    editUser({id:id,  name:e.target.value})
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
          <input type="search" name="" id="" onChange={(e)=> setusername(e.target.value)}/>
          <button>add</button>
        </form>

        {users?.map((item) => (
          <div key={item.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <span>{item.name}</span>
            <button onClick={()=> seteditmode(!editmode)}>edit</button>
            <button onClick={()=> handleRemove(item)}>delete</button>
          </div>
           {editmode ? <input type="text" onChange={(e)=> handleEdit(e, item.id)}/> : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
