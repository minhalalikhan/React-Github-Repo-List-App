import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function UserBio({ UserInfo }) {


    return (


        <div className="UserBio">

            <img src={UserInfo.avatar_url} alt="user avatar" />
            <div className="userbio_details">
                <h2>  {Boolean(UserInfo.name) && UserInfo.name}</h2>
                <h2>  {!Boolean(UserInfo.name) && UserInfo.login}</h2>
                <h6>
                    {UserInfo.bio}
                </h6>

                <h6> <LocationOnIcon /> {UserInfo.location}</h6>

                <h6>Public repos : {UserInfo.public_repos}</h6>
                <h6>
                    Following :   {UserInfo.following} ,   Followers :  {UserInfo.followers}
                </h6>

            </div>
        </div>
    )

}