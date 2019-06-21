import React, { Component } from 'react';
import './App.css';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

import { connect } from 'react-redux';
import { toggleSideNav } from '../../actions/page.action'


class App extends Component {
  render() {
    let pageClasses = ["kx-page"];
    if (this.props.page.sidenav.isActive) {
      pageClasses.push('kx-is-locked');
    }

    return (
      <div className={pageClasses.join(' ')}>
        <div className="kx-page__canvas kx-flex kx-justify-content-start kx-align-items-start">
          <Header page={this.props.page} toggleSideNav={this.props.toggleSideNav}></Header>
          <Nav page={this.props.page}></Nav>
          <Main page={this.props.page} toggleSideNav={this.props.toggleSideNav}>
          </Main>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})
export default connect(mapStateToProps, { toggleSideNav })(App);