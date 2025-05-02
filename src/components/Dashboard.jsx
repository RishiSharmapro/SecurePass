import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as unique } from "uuid";
import { encryptData, decryptData } from "../utils/Encryption";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuth0();
  const pngRef = React.useRef();
  const urlRef = React.useRef();
  const usernameRef = React.useRef();
  const passRef = React.useRef();
  const [password, setPassword] = React.useState({
    url: "",
    username: "",
    password: "",
  });
  const [passwordList, setPasswordList] = React.useState([]);

  const getPasswords = async () => {
    let response = await fetch(process.env.BACKEND_URL);
    let passwords = await response.json();
    if(passwords){
      setPasswordList(passwords);
    }
  }

  React.useEffect(() => {
    // let passwords = localStorage.getItem("passwords");
    // if (passwords) {
    //   setPasswordList(JSON.parse(passwords));
    // }
    getPasswords();
  }, []);

  const handleClick = () => {
    if (pngRef.current.previousElementSibling.type === "password") {
      pngRef.current.previousElementSibling.type = "text";
      pngRef.current.children[0].src = "/eyecross.png";
    } else {
      pngRef.current.previousElementSibling.type = "password";
      pngRef.current.children[0].src = "/eye.png";
    }
  };

  const handleChange = async (e) => {
    // handleChange function to update the state of password
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!password.url || !password.username || !password.password) {
      toast("Please fill all the fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "error",
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    // Encrypt the password before saving
    const encryptedPassword = await encryptData(user.email, password.password);
    const encryptedPasswordObj = {
      ...password,
      password: encryptedPassword,
    };

    let currId = unique();
    // checking if the url and username already exists
    let existingPassword = passwordList.find(
      (pass) =>
        pass.url === password.url && pass.username === password.username
    );
    if (existingPassword) {
      toast("Password already exists", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "error",
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    setPasswordList([...passwordList, { ...encryptedPasswordObj, id: currId }]);
    // localStorage.setItem(
    //   "passwords",
    //   JSON.stringify([...passwordList, { ...encryptedPasswordObj, id: currId }])
    // );
    axios.post(process.env.BACKEND_URL, { ...encryptedPasswordObj, id: currId });
    

    setPassword({ id: "", url: "", username: "", password: "" });

    toast("Password saved successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: "success",
      theme: "dark",
      transition: Bounce,
    });

    // console.log([...passwordList, {...password, id: currId}], JSON.parse(localStorage.getItem('passwords')));
    //if you are not using controlled components or value attribute in input fields
    // urlRef.current.value = '';
    // usernameRef.current.value = '';
    // passRef.current.value = '';
  };

  const handleEdit = async (id) => {
    let pass = passwordList.find((password) => password.id === id);
    // decrypt the password before setting it to the state
    axios.delete(process.env.BACKEND_URL, pass);
    pass.password = await decryptData(user.email, pass.password);
    setPassword(pass);
    setPasswordList(passwordList.filter((password) => password.id !== id));
    //if you are not using controlled components or value attribute in input fields
    // urlRef.current.value = pass.url;
    // usernameRef.current.value = pass.username;
    // passRef.current.value = pass.password;
  };

  const handleDelete = (id) => {
    // if(!window.confirm('Are you sure you want to delete this password?')){
    //     return;
    // }
    // let updatedList = passwordList.filter(password => password.id !== id);
    // localStorage.setItem('passwords', JSON.stringify(updatedList));
    // setPasswordList(updatedList);

    //--OR--

    let approval = confirm("Are you sure you want to delete this password?");
    if (approval) {
      let updatedList = passwordList.filter((password) => password.id !== id);
      let pass = passwordList.filter((password) => password.id == id);
      axios.delete(process.env.BACKEND_URL, pass);
      // localStorage.setItem("passwords", JSON.stringify(updatedList));
      setPasswordList(updatedList);

      toast("Password deleted successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const copytoClipboard = async (text, isPass) => {
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: "success",
      theme: "dark",
      transition: Bounce,
    });
    if(isPass === 0) {
      navigator.clipboard.writeText(text);
      return;
    }
    // decrypt the password before copying
    const decryptedText = await decryptData(user.email, text);
    navigator.clipboard.writeText(decryptedText);
  };

  return (
    <>
    <div className="min-h-[80vh] bg-[#f0f7f0] py-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
        <div className="container mx-auto max-w-4xl p-4 py-6 border border-[#1a2235] my-3 rounded-xl shadow-lg bg-[#f0f7f0]">
          <div className=" logo font-bold text-3xl text-center my-4">
            <span className="text-green-700">&lt;</span>
            Secure
            <span className="text-green-700">Pass/&gt;</span>
          </div>
          <div className="text-center italic ">
            Handeling your passwords with care
          </div>
          <div className="my-6 flex flex-col gap-8">
            <input
              ref={urlRef}
              onChange={handleChange}
              placeholder="Enter website URL"
              className="rounded-full border border-green-700 px-3 py-1 focus:outline-none"
              type="text"
              name="url"
              value={password.url}
            />
            <div className="flex gap-4">
              <input
                ref={usernameRef}
                onChange={handleChange}
                placeholder="Enter urername"
                className="rounded-full border border-green-700 w-3/4 px-3 py-1 focus:outline-none"
                type="text"
                name="username"
                value={password.username}
              />
              <div className="flex rounded-full border border-green-700 px-3 w-fit py-1 focus:outline-none bg-white">
                <input
                  ref={passRef}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-4/5  outline-none "
                  type="password"
                  name="password"
                  value={password.password}
                />
                <button
                  ref={pngRef}
                  onClick={handleClick}
                  className=" bg-white ml-2 pl-2"
                >
                  <img className="w-5" src="/eye.png" alt="eye.png" />
                </button>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="border-2 border-green-900 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full w-fit mx-auto py-2 px-4 flex items-center justify-center gap-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Save
            </button>
          </div>

          <hr />
          <div className="passwords ">
            <h1 className="text-xl font-bold py-5 ">Your passwords</h1>
            {passwordList.length === 0 && (
              <div className="font-medium ">No passwords to show</div>
            )}
            {passwordList.length !== 0 && (
              <div className="flex flex-col flex-wrap mx-auto mb-10 overflow-scroll overflow-y-clip">
                <div className="-m-1.5 overflow-x-auto ">
                  <div className="p-1.5 min-w-full inline-block align-middle overflow-scroll">
                    <div className="overflow-scroll max-h-96 border-y-2 ">
                      <table className="min-w-full  divide-y rounded-lg overflow-hidden">
                        <thead className="bg-green-900 text-white ">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium uppercase"
                            >
                              Site
                            </th>
                            <th
                              scope="col"
                              className="px-2 md:px-6 py-3 text-center text-xs font-medium uppercase"
                            >
                              Username
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium uppercase"
                            >
                              Password
                            </th>
                            <th
                              scope="col"
                              className="md:px-6 py-3 text-center text-xs font-medium uppercase"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {passwordList.map((password, index) => (
                            <tr key={index}>
                              <td className="md:px-6 py-4 text-sm font-medium text-gray-800">
                                <div className="password flex justify-center items-center">
                                  <a href={password.url} target="_blank">
                                    {password.url.length > 30
                                      ? password.url.slice(0, 25) + "..."
                                      : password.url}
                                  </a>
                                  <div
                                    className="copy pt-1 px-2"
                                    onClick={() =>
                                      copytoClipboard(password.url, 0)
                                    }
                                  >
                                    <lord-icon
                                      src="https://cdn.lordicon.com/iykgtsbt.json"
                                      trigger="click"
                                      style={{ height: "27px" }}
                                    ></lord-icon>
                                  </div>
                                </div>
                              </td>
                              <td className=" px-2 mx-auto  py-1 text-sm text-gray-800">
                                <div className="password flex overflow-clip  justify-center items-center">
                                  <div className="md:max-w-52 overflow-x-scroll max-h-14">
                                    {password.username}
                                  </div>
                                  {/* {(password.username.length > 30 && <span>{password.username.slice(0,30)}</span>)} */}
                                  <div
                                    className="copy pt-1 px-2"
                                    onClick={() =>
                                      copytoClipboard(password.username, 0)
                                    }
                                  >
                                    <lord-icon
                                      src="https://cdn.lordicon.com/iykgtsbt.json"
                                      trigger="click"
                                      style={{ height: "27px" }}
                                    ></lord-icon>
                                  </div>
                                </div>
                              </td>
                              <td className=" md:px-6 py-1 text-sm text-gray-800">
                                <div className="password flex justify-center items-center">
                                  {/* {password.password} */}
                                  <span className="md:px-2 py-1  text-black rounded-full cursor-pointer">
                                    ********
                                  </span>
                                  <div
                                    className="copy pt-1 px-2"
                                    onClick={() =>
                                      copytoClipboard(password.password, 1)
                                    }
                                  >
                                    <lord-icon
                                      src="https://cdn.lordicon.com/iykgtsbt.json"
                                      trigger="click"
                                      style={{ height: "27px" }}
                                    ></lord-icon>
                                  </div>
                                </div>
                              </td>
                              <td className="md:px-3 max-w-32 py-4 text-end text-sm font-medium">
                                <div className="flex  md:gap-3 md:justify-around cursor-pointer ">
                                  <lord-icon
                                    onClick={() => handleEdit(password.id)}
                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                    trigger="hover"
                                    style={{ height: "27px" }}
                                  ></lord-icon>
                                  <lord-icon
                                    onClick={() => handleDelete(password.id)}
                                    src="https://cdn.lordicon.com/skkahier.json"
                                    trigger="hover"
                                    style={{ height: "27px" }}
                                  ></lord-icon>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
