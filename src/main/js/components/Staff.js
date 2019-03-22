/** ----- NPM PACKAGE IMPORTS -----**/
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/** ----- COMPONENT IMPORTS -----**/

/** ----- CSS/STYLING IMPORTS -----**/
import "../../resources/static/css/staff.css";

/**
 * This JS file contains all code related to the rendering of the 'Staff' perspective.
 *
 * Any components you wish to create related to this perspective should be developed within
 * this file.
 */

export class Staff extends React.Component {
    render() {
        return (
            <div className={"page staff-page"}>
                <StaffLanding orders={this.props.orders}
                              orderAttributes={this.props.orderAttributes}
                              diningSessions={this.props.diningSessions}
                              diningSessionsAttributes={this.props.diningSessionAttributes}
                              selectedView={this.props.selectedView}/>
            </div>
        )
    }
}

class StaffLanding extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOrders = this.handleClickOrders.bind(this);
        this.handleClickRequests = this.handleClickRequests.bind(this);
    }

    // Method called when attempting to navigate to the 'Staff Requests' page
    handleClickRequests(){
        this.props.history.push({
            pathname: '/staff-requests',
            state: {}
        })
    }

    // Method called when attempting to navigate to the 'Staff Orders' page
    handleClickOrders(){
        this.props.history.push({
            pathname: '/staff-orders',
            state: {}
        })
    }

    render() {
        return (
            <div>
                <title>Menu for Staff</title>
                <div id="wrapper">
                    <main className = "main-wrapper">
                        <header className="frontpage">
                            <a href="#" className="back" data-transition="slide-from-top"/>
                            <section>
                                <h1>Category 1</h1>
                                <h3 className="page-badge">Healthy and Fresh</h3>
                            </section>
                        </header>
                        <div className="content-wrap full-width">
                            /* Deleted the sample list of menu items as we do not need to see the menu items from staff*/
                            <footer>
                                <div className="signature">
                                    <h6>Sushi</h6>
                                    <h5>PotatoPeeps</h5>
                                </div>
                            </footer>
                        </div>
                        <StaffDiningSession
                            selectedView={this.state.selectedView}
                            diningSessions={this.props.diningSessions}
                            pageSize={this.state.pageSize}
                            diningSessionAttributes={this.props. diningSessionAttributes}
                            diningSessionLinks={this.props.diningSessionLinks}
                            onNavigate={this.props.onNavigate}
                            updatePageSize={this.props.updatePageSize}
                            onUpdate={this.props.onUpdate}
                            onDelete={this.props.onDelete}
                        />
                    </main>
                </div>
                
                <ul id="slideshow">
                    <li id="staff-slideshow-element-first" className="staff-slideshow-elements"/>
                    <li id="staff-slideshow-element-second" className="staff-slideshow-elements"/>
                    <li id="staff-slideshow-element-third" className="staff-slideshow-elements"/>
                    <li id="staff-slideshow-element-fourth" className="staff-slideshow-elements"/>
                    <li id="staff-slideshow-element-fifth" className="staff-slideshow-elements"/>
                </ul>
            </div>
        )
    }
}


/**
 * This component should contain the 'page' for the staff member to view all the current customer requests,
 * either bill or service requests.
 *
 * See 'Customer-Menu' component in Customer.js for an example of how to navigate to this page and connect it
 * to the Staff component above.
 */
export class StaffRequests extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
          <div>

          </div>
        );
    }
}


/**
 * This component should contain the 'page' for the staff member to view all the current orders,
 * generated by customers.
 */
export class StaffOrders extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}