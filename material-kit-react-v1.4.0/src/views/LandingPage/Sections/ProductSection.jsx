import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Camera from "@material-ui/icons/Camera";
import Build from "@material-ui/icons/Build";
import Stats from "@material-ui/icons/ThumbsUpDown"

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    const arr = ['Faster inspection that cam be used 24/7' , 'Higher Accuracy Rates' , '']
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>WHY THE NEED FOR AUTOMATION?</h2>
            <h5 className={classes.description}>
              
                  <div className={classes.typo}>
                    <h4 className={classes.title}><span style={{color : 'green'}}> <VerifiedUser />  </span>Consistent</h4>
                  </div>

                  <div className={classes.typo}>
                    <h4 className={classes.title}><span style={{color : 'green'}}> <VerifiedUser />  </span>Cost Effective</h4>
                  </div>

                  <div className={classes.typo}>
                    <h4 className={classes.title}><span style={{color : 'green'}}> <VerifiedUser />  </span>Higher accuracy rate</h4>
                  </div>

                  <div className={classes.typo}>
                    <h4 className={classes.title} ><span style={{color : 'green'}}> <VerifiedUser />  </span> Inspection that can be used 24/7</h4>
                  </div>
                  
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Camera"
                description="Photos of the tire are taken in various forms for better detection results"
                icon={Camera}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Software Runs"
                description="Our software runs the ML code at the backend to find the defects"
                icon={Build}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Decision Making"
                description="We finally get a set of values that show defected values in red and accurate values in GREEN!"
                icon={Stats}
                iconColor="success"
                vertical
              />
            </GridItem>
            
          </GridContainer>

          
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
