import './home.css' 

function Home () {
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className='form-hello'>
            <h3>Hello</h3>
            <button onClick={logout} className="logOut__btn">LogOut</button>
            <button onClick={deleteAccount} className="delete__btn">Delete</button>
        </div>
    )
}

export default Home;