import Card from './Card';
import SkeletonCard from './skeletonCard'
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

export default function UserRepos({ username, repos }) {


    const [reposData, setReposdata] = useState({})
    const [currentpage, setcurrentpage] = useState(1)
    const [IsLoading, setIsLoading] = useState(false)

    function getReposData() {
        setIsLoading(true);
        fetch("https://api.github.com/users/" + username + "/repos?per_page=10&page=" + currentpage)
            .then(res => {
                if (res.status === 404)
                    throw res;
                return res.json();
            })
            .then(data => setReposdata(data)).catch((e) => {
                console.log("error occured")
            }).finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(() => {
        setcurrentpage(1);
        getReposData();
    }, [username]);

    useEffect(() => {
        getReposData()
    }, [currentpage]);

    const no_repos = repos;
    const no_pages = Math.ceil((no_repos) / 10);

    function handleChange(e, p) {
        setcurrentpage(p);
    }

    return (
        <div className="userrepos">
            <div className="repos-list">
                {IsLoading && (<><SkeletonCard /> <SkeletonCard />  <SkeletonCard />   <SkeletonCard /> </>)}

                {!IsLoading && !Boolean(JSON.stringify(reposData) === "{}") &&
                    reposData.map((repo, i) => {
                        return <Card key={i} data={repo} />
                    })}


            </div>
            <div className="repos-pagination">
                <Pagination page={currentpage} count={no_pages} color="primary" shape="rounded" onChange={handleChange} />
            </div>
        </div>
    )

}