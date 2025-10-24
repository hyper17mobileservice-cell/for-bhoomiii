document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('messageContainer');
    // Your personalized message
    const baseMessage = "I Love You Bhoomiiii ❤️"; 
    
    // Create the message with a styled heart
    const heartMessage = baseMessage.replace('❤️', '<span class="heart">❤️</span>');

    const populateMessages = () => {
        messageContainer.innerHTML = '';

        // 1. Temporarily add one item to measure its actual size
        const tempItem = document.createElement('span');
        tempItem.classList.add('message-item');
        tempItem.innerHTML = heartMessage;
        messageContainer.appendChild(tempItem);

        const itemWidth = tempItem.offsetWidth;
        const itemHeight = tempItem.offsetHeight;

        messageContainer.removeChild(tempItem);

        if (itemWidth === 0 || itemHeight === 0) {
            // Retry if unable to measure size immediately
            setTimeout(populateMessages, 200);
            return;
        }

        const containerWidth = messageContainer.offsetWidth;
        const containerHeight = messageContainer.offsetHeight;

        // 2. Calculate the number of rows and columns needed
        // +1 or +2 ensures the edges are fully covered
        const numCols = Math.floor(containerWidth / itemWidth) + 1; 
        const numRows = Math.floor(containerHeight / itemHeight) + 2; 

        const totalMessages = numCols * numRows;

        // 3. Efficiently create and add all messages
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < totalMessages; i++) {
            const span = document.createElement('span');
            span.classList.add('message-item');
            span.innerHTML = heartMessage;
            fragment.appendChild(span);
        }
        
        messageContainer.appendChild(fragment);
    };

    // Run the function when the page loads and whenever the window is resized
    populateMessages();
    window.addEventListener('resize', populateMessages);
});
