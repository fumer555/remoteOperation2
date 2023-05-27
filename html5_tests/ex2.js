document.getElementById('addButton').addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput');
    var queueList = document.getElementById('queueList');
    
    // Create new list item
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm float-right delete-button';
    deleteButton.addEventListener('click', function() {
        queueList.removeChild(listItem);
    });

    // Create comment button
    var commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.className = 'btn btn-info btn-sm float-right comment-button mr-2';
    commentButton.addEventListener('click', function() {
        var comment = prompt('Enter comment:');
        listItem.textContent = nameInput.value + ' (Comment: ' + comment + ')';
    });

    // Add buttons to list item and list item to queue list
    listItem.appendChild(commentButton);
    listItem.appendChild(deleteButton);
    listItem.textContent += nameInput.value;
    queueList.appendChild(listItem);

    // Clear the input field
    nameInput.value = '';
});
