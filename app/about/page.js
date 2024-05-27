import ProfileIMG from '@/assets/images/Profileimg.jpg'

export default function aboutPage() {
    return (
        <section className="about-me">
            <div className="container">
                <h1>About Me</h1>
            </div>
            <div className="container flex">
                <div className="col-6">
                    <img src={ProfileIMG.src} alt="Profile Image" />
                </div>
                <div className="col-6">
                    <span className="subheading">
                        About Me
                    </span>
                    <h2>A Web Developer Based in Cornwall</h2>
                    <p>I'm an ambitious web developer looking for a role in an established IT company with the opportunity to work the latest technologies and further my goal of becoming a full stack developer while working an challenging and diverse projects.</p>
                    <p>I am a naturally curious and confident individual, continuously working on improving my abilities one problem at a time.</p>
                    <p>I am a family oriented person, with a beautiful daughter, an aquarium hobbyist and guitar killer that is tech obsessed.</p>
                </div>
            </div>
        </section>
    )
}