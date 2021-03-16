import React, { Component } from "react";
import { getPeopleBySearch } from "../../redux/peopleReducer/actions";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  Div,
  Grey,
  IconBox,
  IconContainer,
  Input,
  Img,
  ItemContainer,
  Item,
  Line,
  LightGrey,
  LineContainer,
  Logo,
  SearchBox,
  Spinner,
  SuggestionBox,
  Top,
} from "./Styles";
import logo from "./star-wars-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCross } from "react-icons/im";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      active: -1,
    };
  }

  // Redirect to Persons Page
  showDetails = (url) => {
    const { history } = this.props;
    let id = url.split("/")[5];
    history.push(`/person/${id}`);
  };

  // Debounced Function
  getPeople = debounce(() => {
    const { getPeopleBySearch } = this.props;
    const { query } = this.state;
    const payload = {
      query: query,
    };
    getPeopleBySearch(payload);
  }, 500);

  // Handle query change
  handleChange = (e) => {
    const { value } = e.target;
    this.setState(
      {
        query: value,
        active: -1
      },
      () => this.getPeople()
    );
  };

  // Reset Query
  resetQuery = () => {
    this.setState({ query: "" });
  };

  // Hadle Key Events
  handleChangeActive = (e) => {
    const { active } = this.state;
    const { people: suggestions } = this.props;

    switch (e.keyCode) {
      // Down Key
      case 40: {
        if (active === suggestions.length - 1) {
          this.setState({
            active: 0,
          });
        } else {
          this.setState({
            active: active + 1,
          });
        }
        break;
      }
      // Up Key
      case 38: {
        if (active === 0) {
          this.setState({
            active: suggestions.length - 1,
          });
        } else {
          this.setState({
            active: active - 1,
          });
        }
        break;
      }
      // Enter Key
      case 13: {
        this.showDetails(suggestions[active].url);
        break;
      }

      default: {
        return;
      }
    }
  };

  render() {
    let { people: suggestions, isLoading } = this.props;

    const { active, query } = this.state;
    if (query.length === 0) {
      suggestions = [];
    }

    return (
      <>
        {/* Padding at Top */}
        <Top></Top>
        <Logo>
          <Img src={logo} alt="Star Wars Logo" />
        </Logo>
        <Div>
          {/* Search Box */}
          <SearchBox
            length={suggestions.length}
            onKeyUp={this.handleChangeActive}
          >
            {/* Input Box */}
            <Input
              autoComplete="off"
              name="query"
              onChange={this.handleChange}
              placeholder="Search by name"
              value={query}
            />
            {/* Cancel Icon */}
            {query.length !== 0 ? (
              <ImCross color="#fff" size={10} onClick={this.resetQuery} />
            ) : null}
            {/* Loader and Search Icons */}
            {isLoading ? (
              <Spinner />
            ) : (
              <IconContainer>
                <IconBox>
                  <AiOutlineSearch color="#000" />
                </IconBox>
              </IconContainer>
            )}
          </SearchBox>
          {/* Horizontal Line */}
          <LineContainer>
            <Line />
          </LineContainer>
          {/* Suggestios Box - Show max 8 Items */}
          {query && (
            <SuggestionBox length={suggestions.length}>
              {suggestions.map((item, index) => (
                    <ItemContainer
                      check={active === index}
                      key={item.name}
                      onClick={() => this.showDetails(item.url)}
                    >
                      <Item>
                        {item.name}
                        <Grey>
                          {item.gender.charAt(0).toUpperCase() +
                            item.gender.slice(1)}
                        </Grey>
                      </Item>
                      <LightGrey>{item.birth_year}</LightGrey>
                    </ItemContainer>
                  )
              )}
            </SuggestionBox>
          )}
        </Div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
  isLoading: state.people.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPeopleBySearch: (payload) => dispatch(getPeopleBySearch(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
