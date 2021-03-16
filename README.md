# Search Component
## Using Star Wars API
## Tech Stack
- React
- Redux
- React Router Dom
- Styled Components

## Live URL
https://search-bar-star-wars.netlify.app/

## Screenshots

Search
![Search page](https://github.com/ahmedrzakhan/Search-Bar-App/blob/master/images/search.png)

Loader
![loader](https://github.com/ahmedrzakhan/Search-Bar-App/blob/master/images/loader.png)

Suggestions
![suggestions](https://github.com/ahmedrzakhan/Search-Bar-App/blob/master/images/suggestions.png)

Key Navigation
![key navigation](https://github.com/ahmedrzakhan/Search-Bar-App/blob/master/images/key_navigation.png)

Person Details page
![person details page](https://github.com/ahmedrzakhan/Search-Bar-App/blob/master/images/person_details.png)

Navigate through search suggestions using up, down arrow keys, on enter, user will be navigated to person details page

### How Suggestion box rendering is working and active style on key events?
I am sending suggestions length to SuggestionBox component, if length is 0 it will hide the Suggestion Box, otherwise it will display.  
Using index I am sending one property, which will send true for active and false for other items and background color is being changed accordingly.

JSX snippet
```
<SuggestionBox length={suggestions.length}>
  {suggestions.map((item, index) => {
        <ItemContainer
          check={active === index}
        >
        </ItemContainer>
      );
    }}
</SuggestionBox>
```
Styled Components Snippet
```
const SuggestionBox = styled.div`
display: ${({ length }) => (length !== 0 ? "flex" : "none")};
`;

const ItemContainer = styled.div`
background: ${({ check }) => (check === true ? "#242627" : "#2d2f30")};
`;
```
