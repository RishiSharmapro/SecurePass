import React from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as unique } from 'uuid';


const Master = () => {
    const pngRef = React.useRef();
    const urlRef = React.useRef();
    const usernameRef = React.useRef();
    const passRef = React.useRef();
    const [password, setPassword] = React.useState({url: '', username: '', password: ''});
    const [passwordList, setPasswordList] = React.useState([]);  

    React.useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if(passwords){
            setPasswordList(JSON.parse(passwords));
        }
    }, [])
    

    const handleClick = () => {
        if(pngRef.current.previousElementSibling.type === 'password'){
            pngRef.current.previousElementSibling.type = 'text';
            pngRef.current.children[0].src = '/src/assets/eyecross.png';
        }
        else{
            pngRef.current.previousElementSibling.type = 'password';
            pngRef.current.children[0].src = '/src/assets/eye.png';
        }
    }

    const handleChange = (e) => {
        setPassword({...password, [e.target.name]: e.target.value});
    }

    const handleSave = () => {
        if(!password.url || !password.username || !password.password){
            toast('Please fill all the fields', {   
                position: "top-right",
                autoClose: 5000,
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
        let currId = unique();
        setPasswordList([...passwordList, {...password, id: currId}]);
        localStorage.setItem('passwords', JSON.stringify([...passwordList, {...password, id: currId}]));
        setPassword({id: '', url: '', username: '', password: ''});
        // console.log([...passwordList, {...password, id: currId}], JSON.parse(localStorage.getItem('passwords')));
        //if you are not using controlled components or value attribute in input fields
        // urlRef.current.value = '';
        // usernameRef.current.value = '';
        // passRef.current.value = '';
    }

    const handleEdit = (id) => { 
        let pass = passwordList.find(password => password.id === id);
        setPassword(pass);
        setPasswordList(passwordList.filter(password => password.id !== id));
        //if you are not using controlled components or value attribute in input fields
        // urlRef.current.value = pass.url;
        // usernameRef.current.value = pass.username;
        // passRef.current.value = pass.password;
    }

    const handleDelete = (id) => {
        // if(!window.confirm('Are you sure you want to delete this password?')){
        //     return;
        // }
        // let updatedList = passwordList.filter(password => password.id !== id);
        // localStorage.setItem('passwords', JSON.stringify(updatedList));
        // setPasswordList(updatedList);

        //--OR--

        let approval = confirm('Are you sure you want to delete this password?');
        if(approval){
        let updatedList = passwordList.filter(password => password.id !== id);
        localStorage.setItem('passwords', JSON.stringify(updatedList));
        setPasswordList(updatedList);
        }

        toast('Password deleted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: "success",
            theme: "dark",
            transition: Bounce,
        });

    }

    const copytoClipboard = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: "success",
            theme: "dark",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text);
    }

  return (
      <>
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
            transition= {Bounce}
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_50%_200px,#b0d2be,transparent)]"></div></div>

        <div className="container mx-auto max-w-4xl p-4 my-4 border">
            <div className=" logo font-bold text-3xl text-center">
                <span className='text-green-700'>&lt;</span>
                Secure
                <span className='text-green-700'>Pass/&gt;</span>
            </div>
            <div className="text-center italic ">Handeling your passwords with care</div>
            <div className="my-6 flex flex-col gap-8">
                <input ref={urlRef} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-700 px-3 py-1 focus:outline-none" type="text" name="url" value={password.url}/>
                <div className="flex gap-4">
                    <input ref={usernameRef} onChange={handleChange} placeholder="Enter urername" className="rounded-full border border-green-700 w-3/4 px-3 py-1 focus:outline-none" type="text" name="username" value={password.username}/>
                    <div className="flex rounded-full border border-green-700 px-3 py-1 focus:outline-none bg-white">
                    <input ref={passRef} onChange={handleChange} placeholder="Enter password" className="outline-none" type="password" name="password" value={password.password}/>
                    <button ref={pngRef} onClick={handleClick} className=" bg-white pl-2"><img className="w-6" src="/src/assets/eye.png" alt="eye.png" /></button>
                    </div>
                </div>
                <button onClick={handleSave} className="border-2 border-green-900 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full w-fit mx-auto py-2 px-4 flex items-center justify-center gap-2">
                    <lord-icon src= "https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon> 
                    Save
                </button>
            </div>

            <hr />
            <div className="passwords ">
                <h1 className="text-xl font-bold py-5 ">Your passwords</h1>
                {passwordList.length === 0 && <div className="font-medium ">No passwords to show</div>}
                {passwordList.length !== 0 && <div className="flex flex-col overflow-scroll">
                    <div className="-m-1.5 overflow-x-auto ">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y  rounded-lg overflow-hidden">
                                <thead className="bg-green-900 text-white">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase">Site</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase">Username</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase">Password</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {passwordList.map((password, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                            <div className="password flex justify-center items-center">
                                                <a href={password.url} target="_blank">{password.url}</a>
                                                <div className="copy pt-1 px-2" onClick={()=> copytoClipboard(password.url)}>
                                                    <lord-icon src= "https://cdn.lordicon.com/iykgtsbt.json" trigger="click" style={{height:'27px'}}></lord-icon>
                                                </div>
                                            </div>
                                            </td>
                                            <td className=" px-2 mx-auto py-1 whitespace-nowrap text-sm text-gray-800">
                                            <div className="password flex justify-center items-center">
                                                {password.username}
                                                <div className="copy pt-1 px-2" onClick={()=> copytoClipboard(password.username)}>
                                                    <lord-icon src= "https://cdn.lordicon.com/iykgtsbt.json" trigger="click" style={{height:'27px'}}></lord-icon>
                                                </div>
                                            </div>
                                            </td>
                                            <td className=" px-6 py-1 whitespace-nowrap text-sm text-gray-800">
                                            <div className="password flex justify-center items-center">
                                                {password.password}
                                                <div className="copy pt-1 px-2" onClick={()=> copytoClipboard(password.password)}>
                                                    <lord-icon src= "https://cdn.lordicon.com/iykgtsbt.json" trigger="click" style={{height:'27px'}}></lord-icon>
                                                </div>
                                            </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                {/* <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button> */}
                                                <div className="flex  gap-6 justify-between cursor-pointer ">
                                                    <lord-icon onClick={()=> handleEdit(password.id)} src= "https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" style={{height:'27px'}}></lord-icon>
                                                    <lord-icon onClick={()=> handleDelete(password.id)} src= "https://cdn.lordicon.com/skkahier.json" trigger="hover" style={{height:'27px'}}></lord-icon>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </>
  );
};

export default Master;
