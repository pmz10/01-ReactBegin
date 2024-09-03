
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}

const ObjectLiterals = () => {

    const person: Person = {
        age: 37,
        firstName: 'Fernando Herrera',
        lastName: 'Herrera',
        address: {
            country: 'Candada',
            houseNo: 615
        }
    }

    return (
        <>
            <pre>
                <h3>ObjectLiterals</h3>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    );
};

export default ObjectLiterals;