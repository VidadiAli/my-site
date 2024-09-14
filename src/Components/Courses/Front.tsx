import './Front.css'

const Front = () => {
    return (
        <div className="front-end">
            <div className="front-end-cover">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D" alt="" />
                <span>Front End Proqramlaşdırma</span>
            </div>

            <div className='packets'>
                <div className='online-course'>
                    <h1>Uzaqdan Təhsil</h1>
                    <div>
                        <span>Siz nə öyrənəcəksiz?</span>
                        <div>
                            <span>HTML 5</span>
                            <span>CSS 3</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>BOOTSTRAP</span>
                            <span>Material UI</span>
                            <span>Github & Git</span>
                            <span>Portfolio</span>
                        </div>
                    </div>
                    <div>
                        <span>Dərs prosesi:</span>
                        <div>
                            <span>Həftədə 3 dəfə</span>
                            <span>İlk 2 ay hər dərs 2 saat</span>
                            <span>Növbəti aylar hər dərs 3-4 saat</span>
                            <span>Mənimsəmə qabiliyyətinə əsasən təqribən 6 ay</span>
                            <span>Daimi ev tapşırğı</span>
                            <span>Hər ay kiçik, orta və böyük miqyaslı layihələr (aya əsasən dəişkən)</span>
                        </div>
                    </div>
                    <div>
                        <span>Paketin ümumi qiyməti</span>
                        <div>
                            <button>200 ₼</button>
                            <a href="https://wa.me/+994504587493">İndi Yazıl</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front