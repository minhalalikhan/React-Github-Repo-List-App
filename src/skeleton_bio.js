import { Skeleton } from "@mui/material"

export default function SkeletonBio() {
    return (

        <div className="UserBio">

            <Skeleton variant="circular" width={100} height={100} />
            <div className="userbio_details">
                <Skeleton variant="rectangle" width={200} height={20} sx={{ ml: 2, mb: 0.5 }} />

                <Skeleton variant="rectangle" width={150} height={15} sx={{ ml: 2, mb: 0.5 }} />
                <Skeleton variant="rectangle" width={80} height={15} sx={{ ml: 2, mb: 0.5 }} />
                <Skeleton variant="rectangle" width={80} height={15} sx={{ ml: 2, mb: 0.5 }} />
                <Skeleton variant="rectangle" width={100} height={15} sx={{ ml: 2, mb: 0.5 }} />


            </div>
        </div>
    )

}