import Link from "next/link";
import './how-it-works.css'

 const HowItWorksPage = () => {
    return(
        <div className="how-it-works">
        <h1>How It Works</h1>
        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>

            <Link href="/">
            <button>
                Back
            </button>
        </Link>

        </div>
        
        
    )
 }
 export default HowItWorksPage;