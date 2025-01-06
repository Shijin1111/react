import './Cards.css'
 
function Cards({img,name,phone,email}) {
    return (
        <article className="contact-card">
                <img 
                    src= {img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="./images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>           
    )
}

export default Cards 