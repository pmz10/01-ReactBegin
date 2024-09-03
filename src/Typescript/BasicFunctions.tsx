const BasicFunctions = () => {

    const addTwoNumber = (a:number, b:number): string => {
 //     return (a + b).toString;
        return `${a + b}`;
    }

    return (
        <>
            <h3></h3>
            <span>El resultado de sumar es: {addTwoNumber(2, 8)}</span>
        </>
    )
}

export default BasicFunctions;