import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartBar,
  FaWpforms,
  FaPenAlt,
  FaCameraRetro,
} from "react-icons/fa";

class AdminWelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoll: {},
      previousPoll: [{}],
      user: {firstName: "George",
              lastName: "Sackey"
            },
    };
  }
  render() {
    const pageActions = [
      { 
        icon: (<FaChartBar />),
        ctaPrefix:'View',
        ctaSuffix:'Poll',
        ctaLinkAddress: '#',
        ctaLinkText: 'Current',
      },
      { 
        icon: (<FaWpforms />),
        ctaPrefix:'View',
        ctaSuffix:'Results',
        ctaLinkAddress: '#',
        ctaLinkText: 'Previous Poll',
      },
      { 
        icon: (<FaPenAlt />),
        ctaPrefix:'Create a',
        ctaSuffix:'',
        ctaLinkAddress: '#',
        ctaLinkText: 'New Poll',
      },
      { 
        icon: (<FaCameraRetro />),
        ctaPrefix:'Edit',
        ctaSuffix:'',
        ctaLinkAddress: '#',
        ctaLinkText: 'Account',
      },
    ];

    return (
      <div className="mainDiv App-header">

      <h1 className="admin-initials m-6">{this.state.user.firstName.slice(0,1) + this.state.user.lastName.slice(0,1)}</h1>
        <h4 className="mb-6">What would you like to do?</h4>
        <div className='container admin-page-font-size'>

          { pageActions.map( (action,i) => (
            <div key={i} className='row row-cols-4 m-3'>
              <div className='col text-start '>
              {action.icon}
              </div>
              <div className='col-3 text-start text-nowrap'>
                <p> {action.ctaPrefix} <Link to={action.ctaLinkAddress}>{action.ctaLinkText}</Link> {action.ctaSuffix} </p> 
              </div>
          </div>
          ))}
      </div>
      </div>
    );
  }
}

export default AdminWelcomePage;
