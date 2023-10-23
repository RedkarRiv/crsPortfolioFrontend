import React from "react";
import "./BlogSIM.css";
import { Col, Container, Row } from "react-bootstrap";
import searchIcon from "../../img/searchIcon.png";
import { CarouselBox } from "../../common/Carousel/Carousel";

export const BlogSIM = () => {
  return (
    <>
      <Container
        fluid
        className="blogBG m-0 d-flex justify-content-start align-items-center flex-column"
      >
        <Row className="w-100 d-flex justify-content-center my-4">
          <Col className="col-12 col-md-3 d-flex justify-content-center align-items-center m-0">
            {/* <div className="carrouselContail text-center">Carrousel</div> */}

            <CarouselBox />
          </Col>
        </Row>
        <Row className="w-100 d-flex justify-content-center my-2 mb-4">
          <Col className="col-10 col-md-4 d-flex justify-content-center align-items-center m-0 p-0">
            <div className="searchPostContainer w-100 ps-2 text-center d-flex justify-content-between">
              {" "}
              <img src={searchIcon} className="searchLogo p-1" />{" "}
              <input
                className="inputSearchDesign ps-2"
                placeholder="Buscar publicación..."
              />
              <div className="searchButton px-3 d-flex justify-content-center align-items-center text-center">
                Buscar
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row className="w-75 d-flex justify-content-center align-items-center p-0 m-0">
          <Col className="col-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-1 ">
            <div className="postSpotlightDesign">SPOTLIGHT POST</div>
          </Col>
          <Col className="col-md-6 d-flex justify-content-center align-items-center m-0 p-1">
            <Row className="d-flex w-100 m-0 p-0 flex-wrap">
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>{" "}
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="w-75 d-flex justify-content-center align-items-center pb-5 m-0">
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST2</div>
          </Col>
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>{" "}
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>
        </Row>{" "}
        <Row className="w-75 pb-5 d-flex justify-content-center">
          <Col className="col-md-6 d-flex justify-content-center align-items-center m-0">
            <div className="bannerContainer text-center w-100">Banner</div>
          </Col>
          <Col className="col-md-6 d-flex justify-content-center align-items-center m-0">
            <div className="bannerContainer text-center w-100">Banner</div>
          </Col>
        </Row>
        <Row className="w-75 d-flex justify-content-center align-items-center">
          <Col className="col-md-6 d-flex justify-content-center align-items-center m-0 p-1">
            <Row className="d-flex w-100 m-0 p-0 flex-wrap">
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>{" "}
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
              <Col className="postsContainer col-12 col-md-6  p-1 d-flex justify-content-center align-items-center m-0">
                <div className="postDesign">POST</div>
              </Col>
            </Row>
          </Col>{" "}
          <Col className="col-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-1 ">
            <div className="postSpotlightDesign">SPOTLIGHT POST</div>
          </Col>
        </Row>
        <Row className="d-flex w-75 m-0 pb-5 flex-wrap">
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>{" "}
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>
          <Col className="postsContainer col-12 col-md-3 d-flex justify-content-center align-items-center p-1 m-0">
            <div className="postDesign">POST</div>
          </Col>
        </Row>{" "}
      </Container>
    </>
  );
};
