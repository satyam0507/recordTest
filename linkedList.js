function Node(data) {
    this.data = data;
    this.next = null;
};

function LinkedList() {
    // head will be the top of the list
    // we'll define it as null for now
    this.head = null;
    this.length = 0;

    this.add = function(data) {
        var nodeToAdd = new Node(data),
            nodeToCheck = this.head;
        // if the head is null
        if (!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;
            return nodeToAdd;
        }
        // loop until we find the end
        while (nodeToCheck.next) {
            nodeToCheck = nodeToCheck.next;
        }
        // once were at the end of the list
        nodeToCheck.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
    }
}