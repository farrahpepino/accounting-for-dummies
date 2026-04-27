import Logo from "../../Shared/Logo/Logo";
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar";
import './Settings.css'

const Settings = () => {

    const user = {
        "id": 1,
        "Name": "Farrah Pepino",
        "Email": "pepinoalyssa@gmail.com"
    }
    return (
        <div>
            <Logo />
            <Sidebar />
    
            <div className='container'>
                <div className='box border settings'>
                    <div className="bold lg">Settings</div>
                    <br /><br /><br />

                    <div>
                        <div className="span">
                            <div className="bold ml-2 lg">Name</div>
                            <div>{user.Name}</div>
                        </div>
                        <br /><br />
                        <div className="span">
                            <div className="bold ml-2 lg">Email</div>
                            <div className="sub">{user.Email}</div>
                        </div>
                    </div>
                </div>
                <div className='box border delete'>
                    <div className="bold lg">Delete Account</div>
                    <br />
                    <div>
                        <div className="ml-2">To delete account, type your email.</div>
                        <br />
                        <form className="span ml-2">
                            <input type="email" title="Email" className="border" />
                            <button className="btn red-btn">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Settings