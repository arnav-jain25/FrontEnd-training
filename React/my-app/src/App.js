import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import { AboutUs } from './Components/AboutUs';
import { useState, useEffect } from 'react';
import api from './api-calls/addDelTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  // //Initializing todo list
  // let initTodo;
  // if (localStorage.getItem("itemList") === null) {
  //   initTodo = [];
  // }
  // else {
  //   initTodo = JSON.parse(localStorage.getItem("itemList"))
  // }


  // Defining and setting state of list of items in todo list
  const [itemList, setList] = useState("");

  const displayList = async () => {
    const response = await api.get("todoList")
    return response.data
  }

  const addTodoToList = async (item, means) => {
    console.log("Adding item to list", item, means);
    let id;
    if (itemList.length === 0) {
      id = 1
    }
    else {
      id = itemList[itemList.length - 1].id + 1
    }
    const request = {
      id: id,
      item: item,
      means: means
    }
    const response = await api.post("todoList", request)

    setList([...itemList, response.data])

    addTodoToList()
  }

  // useEffect(() => {
  //   localStorage.setItem("itemList", JSON.stringify(itemList))
  // }, [itemList])

  useEffect(() => {
    const getAllList = async () => {
      const allList = await displayList();
      if (allList) {
        setList(allList);
      }
    }
    getAllList();
  })


  // deleting items from todo list
  const onDelete = async(i) => {
    console.log("Deleting...", i);

    await api.delete(`todoList/${i.id}`);

    setList(itemList.filter((e) => {
      return e !== i
    }))

    // localStorage.setItem("itemList", JSON.stringify(itemList))
  }

  // // Adding items to todo list
  // const addTodoToList = (item, means) => {
  //   console.log("Adding item to list", item, means);
  //   let id;
  //   if (itemList.length === 0) {
  //     id = 1
  //   }
  //   else {
  //     id = itemList[itemList.length - 1].id + 1
  //   }
  //   const todoItem = {
  //     id: id,
  //     item: item,
  //     means: means
  //   }
  //   console.log(todoItem);

  //   setList([...itemList, todoItem])

  //   localStorage.setItem("itemList", JSON.stringify(itemList))
  // }

  return (
    <>
      <Router>
        <Header title='My Application' searchBar={true} />

        <Routes>
          <Route exact path='/' element={
            <>
              <AddTodo addTodoToList={addTodoToList} />
              <Todos list={itemList} onDelete={onDelete} />
            </>
          }>
          </Route>

          <Route exact path='/aboutus' element={
            <AboutUs />} >
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
