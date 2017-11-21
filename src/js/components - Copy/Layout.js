import React from "react";
// import Editable  from "react-editable-div";
import Column from "./Column";
import Container from "./Container"
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";
import Dropdown from "./Dropdown";
import Header1 from "./Header.1";
import NavBar from "./NavBar/NavBar";
import TopHeader from "./TopHeader";
import HeaderHotDeals from './HeaderHotDeals';
import Adds from "./Adds";
import Services from "./Services";
import HomeSlider from "./HomeSlider";
import BestSellers from "./BestSellers";
import ProductsItemData from "./data/ProductsItemData";
import NavBrand from "./NavBar/NavBrand";
import NavbarData from "./NavBar/navbarData";




export default class Layout extends React.Component {
  
  render() { 
    var navbar = NavbarData;
   return (
      <div>
        <div className="top-header">
        <NavBrand brandData={navbar.NavbarData.brandlogo}  /> 
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


      
      
      </div>
    );
  }
}


