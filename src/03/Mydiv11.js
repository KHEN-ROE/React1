const Mydiv11 = (probs) => {
    
    const user2 = probs.user2;

    return(
        <div className="mydiv11">
            Mydiv11
            <p id="p1">
                {user2};
            </p>
            <p>
                {probs.divname};
            </p>
        </div>
    );
}

export default Mydiv11;