import React from 'react';
import TopNav from '../containers/TopNav';
import SideNav from '../containers/SideNav';
import PageContent from '../containers/pageContent';

export default class MasterPage extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="container-fluid fixed">
                <TopNav/>

                 <div id="wrapper">
                     <SideNav/>
                    <PageContent/>
                  </div>   
            </div>
        )

    }

}