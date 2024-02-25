import Link from "next/link"
import './past-trials.css'

const PastTrials = () => {
    return(
        <div className='past-trails'>
            <h1>WELCOME TO PAST TRIALS</h1>
            <p>PastTrials  here you sould be able to see part Trials</p>
        <Link href="/">
            <button>
                Back
            </button>
        </Link>
        </div>
    )
}

export default PastTrials;