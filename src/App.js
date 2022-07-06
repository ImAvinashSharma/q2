import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";
import uniqid from "uniqid";
function App() {
  const usersObj = [];
  const [users, setUsers] = useState(usersObj);
  const addUser = user => {
    user.id = uniqid();
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    const newList = users.filter(user => user.id !== id);
    setUsers(newList);
  };
  return (
    <div className="App">
      <section>
        <Form addUser={addUser} />
        <Display users={users} deleteUser={deleteUser} />
      </section>
    </div>
  );
}

export default App;
