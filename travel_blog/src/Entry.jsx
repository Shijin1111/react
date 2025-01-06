import './Entry.css'
function Entry() {
    return(
        <>
        <div className="entry">
            <img src="./london.webp" />
            <div className='container'>
            <div className='links'>
            <span>Japan</span>
            <a href='https://www.google.com/maps/place/London,+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>View on google maps</a>
            </div>
            
            <div className='details'>
            <h2>Mount Fuji</h2>
            <p>
            Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.
            </p>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Entry