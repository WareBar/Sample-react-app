import { useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer"
import FetchNews from './components/FetchNews';
import Search from './components/Search';
import Loading from './components/Loading';
import Notification from './components/Notification'

function App() {
  const API = ('pub_77027e5b88333448a0fcaad4071b90262f56a')
  const [newsData, setNewsData] = useState([])
  const [query, setQuery] = useState('duterte');
  const [loading, setLoading] = useState(true)  

  const [showNotif, setShowNotif] = useState(false)
  const [notifMessage, setNotifMessage] = useState('')

  return (
    <div className="App">
      {/* the componets that fetches the news data */}
      <FetchNews 
      API={API} 
      setNewsData={setNewsData}
       query={query} 
       setLoading={setLoading} 
       showNotif={showNotif} 
       setShowNotif={setShowNotif} 
       notifMessage={notifMessage}
       setNotifMessage={setNotifMessage}
       
       />

      {
        showNotif? <Notification notifMessage={notifMessage} setShowNotif={setShowNotif}/>:''
      }
      

      <Navigation/>
      <img src='logo.png' alt='test'/>
      <Search setQuery={setQuery}/>

      {loading? <Loading/>: <NewsList newsData={newsData}/> }

      <Footer year="year"/>
    </div>
  );
}

export default App;
