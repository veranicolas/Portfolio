import { Col , Row , Card , Button , Nav , OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../styles/Projects.css';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Not finished yet!
    </Tooltip>
  );


  {
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
        TO DO
        Put the real links for each of the new projects!!!!!!!!!!!!!!!!!!


      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
}




const Projects = ()=>{
    return(
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <Row className='projecol'>
                <Col xs={12} lg={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Weather App</Card.Title>
                            <Card.Text>
                                Simple weather app made with Express.js, using Mapbox's and Weatherstack's API.
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/NodeWeatherApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href='https://vera-weather-app.herokuapp.com/'>
                                        <Button variant="info">Website</Button>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Shisou</Card.Title>
                            <Card.Text>
                                A Twitter clone made with Node.js and React.js, using MongoDB, Mongoose and Socket.io
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/TaskApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href='#'>
                                        <OverlayTrigger
                                            placement='top'
                                            delay={{ show: 250, hide: 450}}
                                            overlay={renderTooltip}
                                        >
                                            <Button variant="info">Website</Button>
                                        </OverlayTrigger>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Choosing App</Card.Title>
                            <Card.Text>
                                A decision-making app for choosing what to eat, made with React.js
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/NodeWeatherApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href='https://vera-weather-app.herokuapp.com/'>
                                        <Button variant="info">Website</Button>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>Task App</Card.Title>
                            <Card.Text>
                                Task writing app with user system. Made with Express.js and MongoDB.
                            </Card.Text>
                            <div className='botones'>
                                <Nav>
                                    <Nav.Link href='https://github.com/queondatodotranqui/TaskApp'>
                                        <Button variant="outline-dark">Github</Button>
                                    </Nav.Link>
                                    <Nav.Link href='#'>
                                        <OverlayTrigger
                                            placement='top'
                                            delay={{ show: 250, hide: 450}}
                                            overlay={renderTooltip}
                                        >
                                            <Button variant="info">Website</Button>
                                        </OverlayTrigger>
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;