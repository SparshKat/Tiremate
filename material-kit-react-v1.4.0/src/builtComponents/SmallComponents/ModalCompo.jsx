import React from 'react'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import axios from 'axios';

import Success from "components/Typography/Success.jsx";
import Danger from "components/Typography/Danger.jsx";
import Refresh from '@material-ui/icons/Refresh'

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Error from '@material-ui/icons/Error'
import { set } from 'mongoose';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class ModalCompo extends React.Component {
    anchorElLeft = null;
    anchorElTop = null;
    anchorElBottom = null;
    anchorElRight = null;
    constructor(props) {
        super(props);
        this.state = {

            classicModal: false,
            openLeft: false,
            openTop: false,
            openBottom: false,
            openRight: false,
            isSuitable: true,
            list: [],
            errorTitle: null
        };
    }
    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
    }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
    }

    componentDidMount() {
        const self = this;
        axios.get('http://192.168.43.196:7879/data.json')
            .then(data => {
                console.log(data.data.num[0].title);
                
                if (data.data.num[0].title === '0') {
                    self.setState({
                        isSuitable: true
                    })
                } else {
                    self.setState({
                        isSuitable: false
                    })
                }

            })
            .catch(err => {
                console.log('ERROR AA RHA HAI BHAI')
                console.log(err);
            });

            
    }


    render() {

        

        const { classes } = this.props;
        return (

            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.title}  >
                        <h3 justify="center">Is this tire suitable enough ? Check below!</h3>
                    </div>
                    
                  
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={4} md={4} lg={4} >
                            <Button
                                color="info"
                                round
                                block
                                onClick={() => this.handleClickOpen("classicModal")}>
                                <LibraryBooks className={classes.icon} />
                                Click here to check!
                            </Button>
                            <Dialog
                                classes={{
                                    root: classes.center,
                                    paper: classes.modal
                                }}
                                open={this.state.classicModal}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => this.handleClose("classicModal")}
                                aria-labelledby="classic-modal-slide-title"
                                aria-describedby="classic-modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                    <IconButton
                                        className={classes.modalCloseButton}
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => this.handleClose("classicModal")}>
                                        <Close className={classes.modalClose} />
                                    </IconButton>
                                    {
                                        [0].map(el => {
                                            if (this.state.isSuitable) {
                                                return (
                                                    <Success>
                                                        Congratulations! This Tire is OK!
                                                        <VerifiedUser />
                                                    </Success>
                                                );

                                            } else {
                                                return (
                                                    <Danger>
                                                        Sorry! this tire is NG.
                                                        <Error />
                                                    </Danger>
                                                );

                                            }
                                        })
                                    }
                                    <DialogContent
                                        id="classic-modal-slide-description"
                                        className={classes.modalBody}
                                    >
                                        <p>

                                        </p>
                                    </DialogContent>
                                    <h4 className={classes.modalTitle} >

                                    </h4>
                                </DialogTitle>

                                


                                <DialogActions className={classes.modalFooter}>
                                    <Button
                                        onClick={() => this.handleClose("classicModal")}
                                        color="danger"
                                        simple>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>

        );
    }

}

export default withStyles(javascriptStyles)(ModalCompo);