import React from "react";
import "./ShopSIM.css";
import { Col, Container, Row } from "react-bootstrap";
import searchIcon from "../../img/searchIcon.png";
import { CarouselBox } from "../../common/Carousel/Carousel";

export const ShopSIM = () => {
  return (
    <div className="shopBG m-0 d-flex justify-content-start align-items-center flex-column">
      <Container
        fluid
        className="d-flex m-0 p-0 align-items-center flex-column BGcheck"
      >
    

        <Row className="w-100 d-flex justify-content-center">
          <Col className="col-6 d-flex justify-content-center align-items-center m-0 my-4">
            <CarouselBox />
          </Col>
        </Row>

        <Row className="w-100 d-flex p-0 my-2 justify-content-center">
          <Col className="col-10 col-md-4 d-flex p-0">
            <div className="searchLab w-100 d-flex justify-content-between ps-2">
              <img src={searchIcon} className="searchLogo p-1" />
              <input
                className="inputSearchDesign ps-2"
                placeholder="Buscar producto..."
              />
              <div className="searchButton px-3 d-flex justify-content-center align-items-center text-center">
                Buscar
              </div>
            </div>
          </Col>
        </Row>
        <Row className="productsContainer mt-3 p-4 d-flex justify-content-center align-items-start flex-wrap">
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
          <Col className="col-12 col-md-4 col-lg-3 col-xl-2  mb-3 d-flex justify-content-center p-2">
            <div className="productCard d-flex flex-column justify-content-between">
              <div className="productImg"></div>
              <div className="productTitle">Titulo de producto</div>
              <div className="productCardButtons d-flex w-100 flex-row justify-content-around">
                <div className="productFavoriteButton h-100 w-50">★</div>
                <div className="productDetailutton h-100 w-50">Ver</div>
              </div>
              <div className="productAddButton p-1">Añadir a carrito</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
