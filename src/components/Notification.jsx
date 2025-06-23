import '../App.css';


const Notification = ({notifMessage, setShowNotif}) =>{
    return (
        <div className="Notification">

            <p>
                <span>🔔</span>
                <span>{notifMessage}</span>
                <span onClick={()=>{
                    setShowNotif(false)
                }}>❌</span>
            </p>
            

        </div>
    )
}


export default Notification