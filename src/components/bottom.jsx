import logoo from '../components/photos/Logo.png'

function Bottom() {
    return (
        <div className="hero-bottom">
        <ul className="hero-bottom-logo">
        <img src="logoo" alt="" />
        </ul>
        <ul>
            <h6>LINKS</h6>
            <p>Home</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Pricing</p>
            <p>Features</p>
            <p>Blog</p>
        </ul>
        <ul>
            <h6>LEGAL</h6>
            <p>Terms of use</p>
            <p>Terms of conditions</p>
            <p>Privecy policy</p>
            <p>Coolkie policy</p>
        </ul>
        <ul>
            <h6>NEWSLETTER</h6>
            <p>Over 25000 people have subscribed</p>
            <input type="search" />
            <button></button>
        </ul>
    </div>
    )
}

export default Bottom;