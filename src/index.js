import "./styles/main.scss"
import "./styles/ButtonComponent.scss"
import "./styles/SearchComponent.scss"
import "./styles/SearchHistory.scss"
import "./styles/SearchAutoComplete.scss"
import ButtonComponent from "./components/ButtonComponent"
import SearchComponent from "./components/SearchComponent";

const deleteButton = new ButtonComponent();
document.getElementById("buttonContainer").innerHTML = deleteButton.createHTMLNode();

const searchComponent = new SearchComponent();
document.getElementById("searchContainer").innerHTML = searchComponent.createHTMLNode();

/**
 *  creates the desired events for the search component
 *  millisecond is for the delay to specify less stress sent to the API
 *  searchInMiddle when is 'true' can fetch for example 'Tanzania, United Republic of' when searching 'united' (in the middle of a title)
 *  and when is 'false' only starts with the title
 */

searchComponent.addEvents(1000,false)

