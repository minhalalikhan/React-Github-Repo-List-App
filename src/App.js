
import './App.css';
import SkeletonBio from './skeleton_bio';
import UserBio from './UserBio';
import { IconButton, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, } from 'react';
import UserRepos from './UserRepos';

function App() {

  // contains user bio data
  const [UserInfo, setUserInfo] = useState({});

  // contains username input
  const [UserInput, setUserInput] = useState('');
  // checks for error in loading userdata
  const [Inputerr, setInputerr] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);


  function getGithubdata(username) {
    setUserInfo({})
    setIsLoading(true);

    fetch("https://api.github.com/users/" + username)
      .then(res => {
        if (res.status === 404)
          throw res;
        else if (res.status === 200) {
          setInputerr(false)

        }


        return res.json();
      })
      .then(data => setUserInfo(data)).catch((e) => {
        setInputerr(true)
        setUserInput('')
      }).finally(() => {
        setIsLoading(false)
      });
  }




  function handlesubmit(e) {
    e.preventDefault();

    getGithubdata(UserInput)


  }
  return (
    <div className="App">

      <header className="App-header">

        <form onSubmit={handlesubmit}>
          <input type="text" value={UserInput} placeholder='enter github username' onChange={(e) => setUserInput(e.target.value)} />

          <IconButton onClick={handlesubmit}><SearchIcon /></IconButton>

          {Inputerr && <Alert severity='error' >please enter valid username</Alert>}

        </form>
        {/* display loading skeleton while fetching data*/}
        {IsLoading && <SkeletonBio />}

        {/* display UserBio is Userinfo is not an empty Object*/}
        {!Boolean(JSON.stringify(UserInfo) === "{}") && <UserBio UserInfo={UserInfo} />}

      </header>
      <main className='App-main'>

        {!Boolean(JSON.stringify(UserInfo) === "{}") && <UserRepos username={UserInfo.login} repos={UserInfo.public_repos} />}

      </main>

    </div>
  );
}

export default App;
