export default function Joke(props)
{
    return (
        <>
        <hr></hr>
            <h2>{props.setup}</h2>
            <p>{props.punchline}</p>
        </>
    )
}