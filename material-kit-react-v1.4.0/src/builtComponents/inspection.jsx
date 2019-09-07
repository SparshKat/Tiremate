import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import ModalCompo from '../builtComponents/SmallComponents/ModalCompo'
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import axios from 'axios';
//modal
import Slide from "@material-ui/core/Slide";

//Images and icons
import profile from "assets/img/faces/tyre.png";
import tyreFront from 'assets/img/faces/tyreFront.jpg'
import tyreRear from 'assets/img/faces/tyreRear.jpg'
import tyreSide from '../assets/img/faces/tyreSide.png';
import tyre from '../assets/img/faces/image1.jpg'
// import tyreimg from ''

import TableStats from '../builtComponents/SmallComponents/TableStats'

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";



class LandingPage extends React.Component {
  state = {
    img1: null,
    img2: null,
    img3: null,
  }

  componentDidMount() {
    const self = this;
    axios.get('http://192.168.43.196:7879/data.json')
      .then(data => {
        console.log(typeof (data.data.url[0].url1));
        console.log(data.data.num[0].title);

        self.setState({
          img1: data.data.url[0].url1,
          img2: data.data.url[0].url2,
          img3: data.data.url[0].url3,
        })

      })
      .catch(err => {
        console.log('ERROR AA RHA HAI BHAI')
        console.log(err);
      });
  }


  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    var left = '1200px';



    return (
      <div>
        <Header
          color="transparent"
          brand="Tiremate"
          link="http://www.google.com"
          // rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer >
                <GridItem xs={4} sm={4} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                      {}
                    </div>

                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer >
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <NavPills
                    // alignCenter
                    color="warning"
                    tabs={[
                      {
                        tabButton: "Front View",

                        tabContent: (
                          <GridContainer >
                            <GridItem xs={12} sm={12} md={8}>
                              <img
                                alt="..."
                                src={this.state.img1}
                                className={navImageClasses}
                              />

                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Rear View",
                        // tabIcon: Palette,
                        tabContent: (
                          <GridContainer >
                            <GridItem xs={12} sm={12} md={8}>
                              <img
                                alt="..."
                                src={this.state.img2}
                                className={navImageClasses}
                              />

                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Side View",
                        // tabIcon: Favorite,
                        tabContent: (
                          <GridContainer >
                            <GridItem xs={12} sm={12} md={8}>
                              <img
                                alt="..."
                                src={this.state.img3}
                                className={navImageClasses}

                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
                {/* Table stats */}

                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <h2 className={classes.title} style={{ textAlign: "center" }}>Inspection Statistics</h2>
                  <TableStats {...this.props} />
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <ModalCompo 
                  {...this.props}/>
                </GridItem>
                
              </GridContainer>


              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(LandingPage);
