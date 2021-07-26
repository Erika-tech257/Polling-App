import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const currentYear = new Date().getFullYear();
        return ( 
            <footer class="footer">
  <div class="content has-text-centered">
    <p>
    @{currentYear} ICP Corp, Inc
    </p>
  </div>
</footer>
         );
    }
}
 
export default Footer;