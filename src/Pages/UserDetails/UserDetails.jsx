import React, { Fragment, PureComponent } from 'react'
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import * as InoIcons from 'react-icons/io';
import ReactNotification from "react-notifications-component";
import { Loader } from '../../Components/Loading/Loader';
import { validateProperty } from '../../Components/Validation/JoiValidation'
import { userData } from '../UserDetails/UserData'
import QrReader from 'react-qr-reader'
import Barcode from '../../Images/user/barcode.webp'
import Qrcode from '../../Images/user/qrcode.png'
import scan from '../../Images/user/scan.jpg'

class UserDetails extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "userName": "ABC",
                "userId": "1",
                "title": "Analyst",
              }],
          userData :userData,
            addform: false,
            editform: false,
            formType: '',
            loading: true,
            isOpen: false,
            isNOpen: false,
            my_object:{},
            result: 'No result'
         
        }
    }

   


    componentDidMount = async () => {
     
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);
    }
  
    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
      }
      handleError = err => {
        console.error(err)
      }

    render() {
        const { data, loading } = this.state;
        console.log(this.state)
        var set1 = "https://www.qrcode-monkey.com";
        console.log(encodeURIComponent(set1))
        var uri = "https://www.qrcode-monkey.com";
        var res = encodeURIComponent(uri);
        console.log(res)
       
        return (
            <Fragment>
                <>
                    <div className="room-master" >
                      <Row>
                        <Col md={5}>
                          <img class="scanImg" src={scan} />
                          <Row>
                          <Col md={6}>
                          <img src={Barcode} class="barcode" />
                          </Col>
                          <Col md={6}>
                            <img src={Qrcode}  class="qrcode" />
                          </Col>
                          </Row><br/>
                          <div class="txtcode">
                            
                          SCAN A  BARCODE OR SIGNAGE QR CODE
                          
                            </div>
                          </Col>
                          <Col md={7}>

                          <div class="reader">
                        <QrReader
                         delay={300}
                       onError={this.handleError}
                       onScan={this.handleScan}
                       style={{ width: '100%' }}
                          />
                          <p>{this.state.result}</p>
      </div>
                          </Col>
                      </Row>
           
                    </div>
                </>

            </Fragment>
        );
    }
}

export default withSnackbar(UserDetails)




