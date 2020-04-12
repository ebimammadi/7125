import {searchHistoryTemplateNode,searchRecordTemplateNode} from "./Templates"

/**
 * SearchHistory class
 */
class SearchHistory {
    /**
     * createHTMLNode function create a click event for the 'clearSearchHistory'
     * @return {string} returns the string to a html node
     */
    createHTMLNode(){
        return searchHistoryTemplateNode
    }

    /**
     * addClearSearchHistoryEvent function adds a click event for the 'clearSearchHistory'
     */
    addClearSearchHistoryEvent(){
        document.getElementById('clearSearchHistory').addEventListener(
            'click',
            () => {
                const container = document.getElementById('searchHistoryContainer');
                document.getElementById('searchHistoryContainer').innerHTML = ''
                // while(container.childNodes.length>1)
                //     container.removeChild(container.lastChild)
            }
        )
    }

    /**
     * removeSearchRecord function removes the html node from the 'searchHistoryContainer'
     * @param  {string} elementId is the id of the desired node
     */
    removeSearchRecord(elementId) {
        const element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }

    /**
     * addDeleteRecordEvent function adds click event for the node
     * @param  {string} recordID is the id of the desired node to be removed from 'searchHistoryContainer'
     */
    addDeleteRecordEvent(recordID){
        const closeElementID = `close-${recordID}`;
        document.getElementById(closeElementID).addEventListener(
            'click',
            () => {
                this.removeSearchRecord(recordID)
            }
        )
    }

    /**
     * pushSearchRecord function create an html node inside the 'searchHistoryContainer'
     * @param  {string} title is the title of the selected search record that is passed to the function
     */
    pushSearchRecord(title){
        let [node,recordId] = this.createRecord(title);
        document.getElementById("searchHistoryContainer").insertAdjacentHTML('beforeend',node)
        this.addDeleteRecordEvent(recordId)
    }

    /**
     * createRecord function
     * @param  {string} title is the title of the selected search record that is passed to the function
     * @return {Array} it returns the node and the id (string) of created node
     */
    createRecord(title){
        const id = this.createUniqueId();
        const date = this.formatDate();
        const node = searchRecordTemplateNode(title,id,date);
        return [ node , id ]
    }

    /**
     * createUniqueId function
     * @return {string} A unique ID is generated for each searchRecord in searchHistory
     */
    createUniqueId(){
        return 'xxxx-xxxx-xxxx-4xxx-yxxx-xxxx-xxxx'
            .replace(/[xy]/g, function(c) {
                let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }

    /**
     * formatDate function
     * @return {string} The desired format date string
     */
    formatDate(){
        let date = new Date();
        return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '
            +(date.getHours()>12?date.getHours()-12:date.getHours())+':'+date.getMinutes()+' '
            +(date.getHours()>12?"PM":"AM")
    }
}

export default SearchHistory
