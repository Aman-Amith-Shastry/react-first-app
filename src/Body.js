const Body = () => {
    return(
        <body className = "body">
            <button onClick={handleClick}> Click me! </button>
            <div className = "content">
                <h1> { title } </h1>
                <p> { num } </p>
            </div>
        </body>
    );
}

export default Body;