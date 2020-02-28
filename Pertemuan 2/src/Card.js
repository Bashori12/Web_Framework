import React, {Component} from "react"
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import './App.css';

class Header extends Component{
    render(){
      return(
        <div className="App">
          <img src={require('./Foto.JPG')} className="App-logo" alt="logo"></img>
        </div>
      );
    }
  }

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'yellow' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default class NewsCard extends Component {
    render() {
        return (
            <div className="App-header">
                <Card bg="danger" border="dark" text="black" style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title><i><b>BIODATA</b></i></Card.Title>
                    <Header/>
                        <Accordion className="Card">
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="1"><b>Nama</b></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Bashori Try Subchan Fadhory</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="2"><b>NIM / No. Absen</b></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>1741720096 / 06</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="3"><b>Instansi</b></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Politeknik Negeri Malang</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="4"><b>Jurusan / Prodi / Kelas</b></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Teknik Informasi / D-IV Teknik Informatika / TI - 3G</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <CustomToggle eventKey="5"><b>Email</b></CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>bashorydorik12@gmail.com</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
