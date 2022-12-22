// Stying of the parent App.js component
import './App.css';

// importing application components
import Header from './My_Components/Header';
import Footer from './My_Components/Footer';
import Homepage from './My_Components/Homepage';
import Dashboard from './My_Components/Dashboard';
import AddUser from './My_Components/AddUser';
import About from './My_Components/About';

// importing CRUD functions made using API calls from the apiCRUD.js file
import { baseAPI, addUserData, updateUserData, deleteUserData, deleteUserDatabase } from './My_API/apiCRUD';
import axios from 'axios';

import { useState, useEffect } from 'react'; // importing ReactHooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // importing modules needed for routing


export function App() {

  const [userList, setUserList] = useState("") // Initializing database in useState()

  useEffect(() => {
    const getUserDatabase = async () => { // Read (R) user database data to the dashboard from api using getUserDatabse()
      await axios.get(baseAPI)
        .then((response) => {
          console.log(response.data);
          setUserList(response.data);
        })
        .catch((error) => {
          console.log("Error - ", error);
        })
    }
    getUserDatabase()

  });

  return (
    <Router>
      <Header title="ReactCRUD" deleteUserDatabase={deleteUserDatabase} userList={userList} />

      <Routes>
        <Route exact path='/' element={
          <Homepage />}>
        </Route>
        <Route path='/dashboard/*' element={<Dashboard userList={userList} deleteUserData={deleteUserData} updateUserData={updateUserData} />}>
          {/* <Route path='/dashboard/editUser' element={<EditUser edituser={props.userdata} updateUserData={props.updateUserData} />} /> */}
        </Route>
        <Route exact path='/addUser' element={
          <AddUser addUserData={addUserData} />}>
        </Route>
        <Route exact path='/about' element={
          <About />}>
        </Route>
      </Routes>

      <Footer deleteUserData={deleteUserDatabase} userList={userList} />
    </Router>
  );
}

export default App;
