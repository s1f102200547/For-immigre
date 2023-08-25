export default function Article({data}){
    return(
        <>
            <h1>Article</h1>
            <img src={data.image} alt={data.imageLabel} />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.Article}</p>
        </>
    );
}