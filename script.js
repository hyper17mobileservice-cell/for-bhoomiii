document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('messageContainer');
    const message = "I Love You bhoomiiii ❤️"; // The message to display

    // Function to calculate how many messages can fit
    const populateMessages = () => {
        // Clear existing messages
        messageContainer.innerHTML = '';

        // Temporarily add one item to measure its width and height
        const tempItem = document.createElement('span');
        tempItem.classList.add('message-item');
        tempItem.innerHTML = message;
        messageContainer.appendChild(tempItem);

        const itemWidth = tempItem.offsetWidth;
        const itemHeight = tempItem.offsetHeight;

        // Remove temporary item
        messageContainer.removeChild(tempItem);

        if (itemWidth === 0 || itemHeight === 0) {
            // Fallback if measurement fails (e.g., element not rendered yet)
            console.warn("Could not measure message item size. Retrying...");
            setTimeout(populateMessages, 100); // Retry after a short delay
            return;
        }

        const containerWidth = messageContainer.offsetWidth;
        const containerHeight = messageContainer.offsetHeight;

        // Calculate how many messages fit horizontally and vertically
        const numCols = Math.floor(containerWidth / itemWidth);
        const numRows = Math.ceil(containerHeight / itemHeight) + 2; // Add a couple extra rows for good measure

        const totalMessages = numCols * numRows;

        // Create and append messages
        for (let i = 0; i < totalMessages; i++) {
            const span = document.createElement('span');
            span.classList.add('message-item');
            span.innerHTML = message;
            messageContainer.appendChild(span);
        }
    };

    // Initial population
    populateMessages();

    // Repopulate messages on window resize to maintain density
    window.addEventListener('resize', populateMessages);
});
