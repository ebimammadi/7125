import {deleteButtonTemplateNode} from "./templates"
/**
 * DeleteButton component
 */
class DeleteButton {
    constructor() {
        this.title = "Delete";
    }
    /**
     * Creates the deleteButton element (CSS button)
     * @return {string} returns the string to a html node
     */
    createHTMLNode() {
        return deleteButtonTemplateNode(this.title)
    }
}
export default DeleteButton
