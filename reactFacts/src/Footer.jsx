import './Footer.css'
function Footer() {
    return(
        <>
        <div className='footer'>

        
            <h2>Fun facts about React</h2><br></br>
      <ul style={{listStyleType:'none',alignItems:'center'}}>
          <li>React was created by Jordan Walke, a software engineer at Facebook, in 2011.</li>
          <li>It was first used for Facebook's News Feed and later for Instagram in 2012.</li>
          <li>React uses a virtual DOM to improve performance by minimizing direct manipulations of the real DOM.</li>
          <li>The library follows a component-based architecture, making code reusable and easier to manage.</li>
          <li>React introduced the concept of hooks in version 16.8, simplifying state and side-effect management in functional components.</li>
          <li>It's maintained by Facebook, but it has a massive open-source community contributing to its growth.</li>
          <li>React powers major websites and applications, including Netflix, Airbnb, and WhatsApp Web.</li>
          <li>JSX (JavaScript XML) is a unique syntax used in React to write HTML-like code within JavaScript.</li>
          <li>React Native, a framework for building mobile apps, is based on React and allows developers to use a single codebase for iOS and Android.</li>
          <li>React has a strong ecosystem with tools like React Router, Redux, and Next.js, making it suitable for a wide range of applications.</li>
      </ul>
        </div>
        </>
    )
}
export default Footer