const chatBox =
    document.getElementById("chat-box");

const messageInput =
    document.getElementById("message-input");

const sendButton =
    document.getElementById("send-button");

const clearButton =
    document.getElementById("clear-button");

const typingIndicator =
    document.getElementById("typing-indicator");


// =====================================
// ADD MESSAGE
// =====================================

function addMessage(message, sender) {

    const messageDiv =
        document.createElement("div");

    messageDiv.classList.add("message");


    if (sender === "user") {

        messageDiv.classList.add(
            "user-message"
        );

    } else {

        messageDiv.classList.add(
            "bot-message"
        );

    }


    const avatar =
        document.createElement("div");

    avatar.classList.add("avatar");

    avatar.textContent =
        sender === "user"
            ? "You"
            : "AI";


    const content =
        document.createElement("div");

    content.classList.add(
        "message-content"
    );


    const name =
        document.createElement("div");

    name.classList.add(
        "message-name"
    );

    name.textContent =
        sender === "user"
            ? "You"
            : "TechCare AI";


    const text =
        document.createElement("div");

    text.classList.add(
        "message-text"
    );

    text.textContent = message;


    content.appendChild(name);

    content.appendChild(text);

    messageDiv.appendChild(avatar);

    messageDiv.appendChild(content);

    chatBox.appendChild(messageDiv);


    chatBox.scrollTop =
        chatBox.scrollHeight;

}


// =====================================
// SHOW TYPING
// =====================================

function showTyping() {

    typingIndicator.classList.remove(
        "hidden"
    );

}


// =====================================
// HIDE TYPING
// =====================================

function hideTyping() {

    typingIndicator.classList.add(
        "hidden"
    );

}


// =====================================
// SEND MESSAGE
// =====================================

async function sendMessage() {

    const message =
        messageInput.value.trim();


    if (!message) {

        return;

    }


    addMessage(
        message,
        "user"
    );


    messageInput.value = "";


    sendButton.disabled = true;

    messageInput.disabled = true;


    showTyping();


    try {

        const response =
            await fetch(
                "/chat",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            {
                                message:
                                    message
                            }
                        )

                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                "Server error"
            );

        }


        addMessage(
            data.response,
            "bot"
        );


    } catch (error) {

        console.error(error);


        addMessage(
            "Sorry, something went wrong. Please try again.",
            "bot"
        );

    }


    hideTyping();


    sendButton.disabled = false;

    messageInput.disabled = false;

    sendButton.textContent = "Send";

    messageInput.focus();

}


// =====================================
// SEND BUTTON
// =====================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// =====================================
// ENTER KEY
// =====================================

messageInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


// =====================================
// CLEAR CHAT
// =====================================

clearButton.addEventListener(
    "click",
    function() {

        chatBox.innerHTML = "";


        addMessage(
            "Hello! 👋\n\nWelcome to TechCare Solutions.\n\nHow can I help you today?",
            "bot"
        );


        messageInput.focus();

    }
);