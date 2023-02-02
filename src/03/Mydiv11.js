const Mydiv11 = (probs) => {
    
    console.log(probs)
    return(
        <div className="mydiv11">
            Mydiv11
            <p id="p1">
                {probs.user};
            </p>
            <p>
                {probs.divname};
            </p>
        </div>
    );
}

export default Mydiv11;