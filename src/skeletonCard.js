
import { Skeleton } from '@mui/material';

export default function UserRepos() {

    return (


        <div className="repo_card">

            <Skeleton variant="rectangle" width={200} height={40} sx={{ mt: 2, ml: 2, mb: 2 }} />

            <Skeleton variant="rectangle" width={150} height={25} sx={{ ml: 2, mb: 2 }} />

            <Skeleton variant="rectangle" width={80} height={20} sx={{ ml: 2, mb: 1 }} />
        </div>


    )

}