import {searchComponentTemplateNode} from "./templates";
import SearchHistory from "./SearchHistory";
import SearchAutoComplete from "./SearchAutoComplete";

const searchHistory = new SearchHistory();
const searchAutoComplete = new SearchAutoComplete();

/**
 * This class is for the third part of this app and is separated into two parts:
 * the search input and autocomplete, and the second is the search history records
 */
class SearchComponent {
    /**
     * This function creates the search components:
     * the search input and autocomplete, and
     * the second is the search history records
     */
    createHTMLNode(){
        return searchComponentTemplateNode(
            searchAutoComplete.createHTMLNode(),
            searchHistory.createHTMLNode()
            )
    }

    /**
     * This adds the events to the created nodes
     * Note: the parameters are passed to the createKeyupInputEvent function
     * @param {Number} milliseconds is the number in milliseconds to delay the fetching process from the API
     * @param {boolean} searchInMiddle is a flag to search just starting with the title or it can be in the middle of a title:
     * 'true': in the middle of a title, 'false': only starts with the title
     */
    addEvents(milliseconds,searchInMiddle){
        searchAutoComplete.createKeyupInputEvent(milliseconds,searchInMiddle);
        searchAutoComplete.createOnFocusOutEvent();
        searchHistory.addClearSearchHistoryEvent();
    }
}

export default SearchComponent
