import { Col, Image, Row, Nav} from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from './Footer';

const Contact = ()=>{
    return(
        <div className='contact-bg'>
            <div className='contact' id='contact'>
                <h2>Let's talk!</h2>
                <h4>You can find me on my social networks or via <a href='https://wa.me/5492235578480?text=Hello! I am Nicolas Vera. Nice to meet you'>WhatsApp</a></h4>
                <Row className='redes'>
                    <Nav>
                        <Col>
                            <Nav.Link className="onHoverLinks" href='https://www.linkedin.com/in/nicolas-vera-653b54196'>
                                <Image src={process.env.PUBLIC_URL + '/img/linkedin.svg'}></Image>
                            </Nav.Link>
                            
                        </Col>
                        <Col>
                            <Nav.Link className="onHoverLinks" href='https://www.instagram.com/_________________________vera/'>
                                <Image src={process.env.PUBLIC_URL +'/img/instagram.svg'}></Image>
                            </Nav.Link>   
                        </Col>
                        <Col>
                            <Nav.Link className="onHoverLinks" href='https://github.com/queondatodotranqui'>
                                <Image src={process.env.PUBLIC_URL +'/img/github.svg'}></Image>
                            </Nav.Link>    
                        </Col>
                    </Nav>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;