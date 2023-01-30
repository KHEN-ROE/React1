const Mydiv11 = (probs) => {
    const user = probs.user;
    console.log(probs)
    return(
        <div className="mydiv11">
            Mydiv11
            <p id="p1">
                {user};
            </p>
            <p>
                {probs.divname};
            </p>
        </div>
    );
}

export default Mydiv11;