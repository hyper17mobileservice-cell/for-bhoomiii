/* Basic body reset and full screen setup */
body {
    margin: 0;
    overflow: hidden; /* Hide scrollbars */
    font-family: Arial, sans-serif;
    background-color: #000; /* Black background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
}

/* Container for all messages. Uses Flexbox to wrap the content. */
.message-container {
    display: flex;
    flex-wrap: wrap; /* Allows messages to wrap onto the next line */
    justify-content: center; /* Centers the messages horizontally */
    align-content: flex-start; /* Aligns lines of content to the top */
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 5px; /* Small padding so text isn't right on the edge */
    box-sizing: border-box;
}

/* Styling for a single message item */
.message-item {
    color: white; /* White text for contrast on black */
    /* Clamp is key for responsiveness: Min size, viewport-based size, Max size */
    font-size: clamp(10px, 2.5vw, 20px); 
    white-space: nowrap; /* Keep the entire message on a single line */
    margin: 0 4px; /* Small horizontal space between messages */
    line-height: 1.2; /* Spacing between rows */
    flex-shrink: 0; /* Prevents items from squishing smaller than their content */
    padding: 2px 0; /* Vertical padding for better row separation */
    user-select: none; /* Prevents selecting the text, keeping the display cleaner */
}

/* Style the heart specifically to be red */
.heart {
    color: red;
}

/* Optimization for smaller mobile screens */
@media (max-width: 600px) {
    .message-item {
        font-size: clamp(8px, 4vw, 16px);
        margin: 0 2px;
    }
}
