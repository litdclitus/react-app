//JSX: only 1 parent tag
//solution: Fragmet <> </>

import './style.css';

const MyComponent = () => {
    const lit = "LitDClitus";
    // const age = 25;
    // const age = { name: 'Lit', age: 25, };
    const age = [2, 5, 1];
    return (
        <>
            <div className="child-1">React & {lit}</div>
            <div>Age: {JSON.stringify(age)}</div>
            <div>{console.log("Lit")}</div>
            <div className="child-2" style={{ color: 'lightblue' }}>React & Vite</div >
        </>
    );
}

export default MyComponent;