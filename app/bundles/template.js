import React from 'react'
import { Helmet } from 'react-helmet'

export default props => {
    const [count, setCount] = React.useState(props.count)
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>

            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => alert(count)}>Alert</button>

            <style jsx>{`
                h1 {
                    color: ${props.color};
                }
            `}</style>
        </div>
    )
}
