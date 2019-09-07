import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from "components/CustomButtons/Button.jsx";
import axios from 'axios';

//css file
import tablePageStyle from "assets/jss/material-kit-react/views/tablePage.jsx";

class TableStats extends React.Component {

  state = {
    list: []
  }

  componentDidMount() {
    const self = this;
    axios.get('http://192.168.43.196:7879/data.json')
      .then(data => {
        console.log(data.data.tyres);

        self.setState({
          list : data.data.tyres
        })
       
      })
      .catch(err => {
        console.log('ERROR AA RHA HAI BHAI')
        console.log(err);
      });
  }
  

  render() {
    const { classes} = this.props;
 
    return (
      <List className={classes.root} subheader={<li />}>
        {[0].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>

              {
                this.state.list.map((el, index) => {

                  if (el.description === 'present') {
                    return (
                      <div className={classes.typo} >
                      <h4 className={classes.title}>{el.title} : </h4>
                      <Button style={{ display: "inline", marginLeft: '10px' }} color="danger">Flaw Present</Button>
                    </div>
                    );
                  } else if (el.description === 'null') {
                    return(
                      <div className={classes.typo} >
                      <h4 className={classes.title}>{el.title} :</h4>
                      <Button style={{ display: "inline", marginLeft: '15px' }} color="success">Flaw Not Present</Button>
                    </div>
                    );                  
                  }
                })
              }

            </ul>
          </li>
        ))}
      </List>
    );
  }
}







export default withStyles(tablePageStyle)(TableStats);