
export default function Card({ data }) {

    return (
        <div className="repo_card" onClick={() => { window.open(data.html_url, "_blank") }}>
            <h1>{data.name}</h1>
            <h5 className="desc"> {data.description}</h5>

            <h5 className="Lang"> {data.language} </h5>

        </div>
    )
}