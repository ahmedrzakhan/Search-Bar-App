import React, { Component } from "react";
import { connect } from "react-redux";
import { getPersonDetails } from "./../../redux/peopleReducer/actions";
import { Logo, Img } from "./../Home/Styles";
import { Card, Flex, IconContainer, Title, Top, Value } from "./Styles";
import { GiBodyHeight } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { GiFilmSpool, GiSpaceship } from "react-icons/gi";
import { IoCarSportSharp, IoPersonCircleSharp } from "react-icons/io5";
import logo from "./../Home/star-wars-logo.png";

class Person extends Component {
  getDetails = () => {
    const { getPersonDetails } = this.props;
    const { id } = this.props.match.params;

    const payload = {
      id: id,
    };
    getPersonDetails(payload);
  };

  componentDidMount() {
    this.getDetails();
  }

  render() {
    const { person, error } = this.props;
    // Error in Getting Perosn Details
    if (error) {
      return (
        <>
          <Top></Top>
          <Logo>
            <Img src={logo} alt="Star Wars Logo" />
          </Logo>
          <Title>404</Title>
          <Title>Page Not Found</Title>
        </>
      );
    }

    if (Object.keys(person).length === 0) {
      return null;
    }

    const { name, height, birth_year, films, vehicles, starships } = person;
    return (
      <>
        {/* Padding at Top */}
        <Top></Top>
        {/* Logo */}
        <Logo>
          <Img src={logo} alt="Star Wars Logo" />
        </Logo>
        {/* Card contains Icons and details */}
        <Card>
          <Flex>
            <IconContainer>
              <IoPersonCircleSharp />
            </IconContainer>
            <Title>Name:&nbsp;</Title>
            <Value>{name}</Value>
          </Flex>
          <Flex>
            <IconContainer>
              <GiBodyHeight />
            </IconContainer>
            <Title>Height:&nbsp;</Title>
            <Value>{height}</Value>
          </Flex>{" "}
          <Flex>
            <IconContainer>
              <FaBirthdayCake />
            </IconContainer>
            <Title>Birth Year:&nbsp;</Title>
            <Value>{birth_year}</Value>
          </Flex>{" "}
          <Flex>
            <IconContainer>
              <GiFilmSpool />
            </IconContainer>
            <Title>Films:&nbsp;</Title>
            <Value>{films.length}</Value>
          </Flex>{" "}
          <Flex>
            <IconContainer>
              <IoCarSportSharp />
            </IconContainer>
            <Title>Vehicles:&nbsp;</Title>
            <Value>{vehicles.length}</Value>
          </Flex>{" "}
          <Flex>
            <IconContainer>
              <GiSpaceship />
            </IconContainer>
            <Title>Starships:&nbsp;</Title>
            <Value>{starships.length}</Value>
          </Flex>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  person: state.people.person,
  error: state.people.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPersonDetails: (payload) => dispatch(getPersonDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
