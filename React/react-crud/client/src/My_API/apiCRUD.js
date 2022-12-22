import axios from "axios";
export const baseAPI = "http://localhost:3001"; //the base api on which the mongoDB server is running


// (C) creating a new user data in the database using axios for api calls
export const addUserData = async (name, email, password, phone, dob, gender) => {
    console.log("adding userdata", name, email, password, phone, dob, gender);
    const data = {};
    const request = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        gender: gender
    }
    await axios.post(baseAPI, request)
        .then((response) => {
            data = response.data;
            // setUserList(userList => [...userList, response.data])
        })
        .catch((error) => {
            console.log("Error - ", error);
        })
    // window.location.reload();
}


// (U) updating userdata on the dashboard using axios for api calls
export const updateUserData = async (id, name, email, password, phone, dob, gender) => {
    const request = {
        id: id,
        name: name,
        email: email,
        password: password,
        phone: phone,
        dob: dob,
        gender: gender
    }
    const response = await axios.put(`${baseAPI}/${id}`, request)
    // setUserList(response.data)
}


// (D) deleting data of a single user using axios for api calls
export const deleteUserData = (userdata) => {
    console.log("Deleting", userdata);
    const delUserData = async () => {
        await axios.delete(`${baseAPI}/${userdata._id}`)
        // window.location.reload();
        // .then(() => {
        //   setUserList(userList.filter((e) => {
        //     return e !== userdata;
        //   }))
        // })
        // .catch((error) => {
        //   console.log("Error - ", error);
        // })
    }
    delUserData();
}


// (D) deleting the entire mongoDB user database using axios for api calls
export const deleteUserDatabase = (userList) => {
    console.log("Deleting");
    const choice = prompt('Do you want to delete the database? (y/n)')
    if (choice === 'y') {
        for (let userdata of userList) {
            const delUserDatabase = async () => {
                await axios.delete(`${baseAPI}/${userdata._id}`)
                // .then(() => {
                //   setUserList(userdata.filter((e) => {
                //     return e !== userdata;
                //   }))
                // })
                // .catch((error) => {
                //   console.log("Error - ", error);
                // })
            }
            delUserDatabase();
        }
        // window.location.reload()
    }
}