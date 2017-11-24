import React from "react";
// import Editable  from "react-editable-div";
import Column from "./Column";
import Container from "./Container";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";
import Dropdown from "./Dropdown";
import NavBar from "./NavBar/NavBar";
import TopHeader from "./TopHeader";
import HeaderHotDeals from './HeaderHotDeals';
import Adds from "./Adds";
import Services from "./Services";
import HomeSlider from "./HomeSlider";
import BestSellers from "./BestSellers";
import AllCategoryNav from "./AllCategory/AllCategoryNav";
import Tab from "./Tab";
import SocialMedia from "./SocialMedia";

export default class Layout extends React.Component {
  
  render() { 
   return (
      <div>
          <div className="top-header">
            <Container className="container">
              <Row>
                <Column className="col-sm-12">
                {/* <NavBar/> */}
                </Column>
              </Row>
            </Container>
            <Container className="container">
              <Row>
                <Column className="col-sm-12">
                <HeaderHotDeals />
                </Column>
              </Row>
            </Container>
          </div>
            <Container className="container">
              <Row>
                <Column className="col-sm-8">
                  <HomeSlider />
                </Column>
                <Column className="col-sm-4">
                  <div className="Adds">
                  <div className="mask"></div>
                  {/* <Adds>
                  <img src={adds.pageAddImage} />
                  <a href={adds.addUrl}>{adds.Title} </a>                  
                  </Adds> */}
                  </div>
                </Column>
              </Row>
            </Container>
            <div className="clearfix"></div>
            <section className="service-home-2">
              <Container className="container">
                <Row>
                  <Column className="col-sm-12">
                    <div className="services-block row">
                    <Services />
                    </div>
                  </Column>
                </Row>
              </Container>
            </section>
            <section className="bestseller-product home-product-tab animation-element slide-left all-pro in-view">
              <Container className="container">
                <Row>
                  <Column className="col-sm-12">
                    <BestSellers/>
                  </Column>
                </Row>
              </Container>
            </section>
              <br/><br/>
            <Container className="container">
              <Row>
                <Column className="col-sm-6">
                  <Tab/>
                </Column>
              </Row>
            </Container>

        <br/><br/>
            <Footer className="page-footer"/>

            <Container className="container footer-middle">
              <Row>
                <Column className="col-sm-6">
                <SocialMedia/>
                </Column>
              </Row>
            </Container>



           
      </div>
      
    );
    
  }
}


