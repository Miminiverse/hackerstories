

function App() {
    const [number, setNumber] = React.useState('')
    const points = React.useRef(0)
    // const [points, setPoints] = React.useState(0)
    const index = Math.floor(Math.random() * 100)
    const [count, setCount] = React.useState(60)
    const timerId = React.useRef()
    const prevCount = React.useRef()

    const handleGenerateNumber = () => {
        setNumber(index)
    }

    const handleEvenClick = () => {
        if (number) {
            if (number % 2 === 0) {
                console.log("correct")
                points.current = points.current + 1
                setDarkEven(prevDarkEven => !prevDarkEven)
            }
            else {
                console.log("wrong")
            }
        }
        setNumber(index)
    }

    const handleOddClick = () => {
        if (number) {
            if (number % 2 !== 0) {
                console.log("correct")
                points.current = points.current + 1
                setDarkOdd(prevDarkOdd => !prevDarkOdd)
            }
            else {
                console.log("wrong")
            }
        }
        setNumber(index)
    }

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('start ', timerId.current)

    }

    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('stop ', timerId.current)
    }

    React.useEffect(() => {
        prevCount.current = count
    }, [count])

    console.log(count, prevCount.current)

    return (
        <>
            <div >
                <h1>{number}</h1>
                <button disabled={!number} type="button" onClick={handleOddClick}> Odd</button>
                <button disabled={!number} type="button" onClick={handleEvenClick}> Even</button>
                <button disabled={number} onClick={handleGenerateNumber}> Play </button>
                <button onClick={handleStart}> Start </button>
                <button onClick={handleStop}> Stop </button>
                <h2>User's points: {points.current}</h2>
                <h3>{count}</h3>

            </div>
        </>
    )
}

export default App
