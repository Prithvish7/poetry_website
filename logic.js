const poems = [
    {
        title: "বিচার চাই",
        content: `কী বীভৎস যন্ত্রনা নিয়ে \n
চলে গেল আমার বোন ! \n
ওরে ধর্ষক , ওরে খুনি, \n 
কান খুলে তোরা শোন--\n
দিকে দিকে যে প্রতিবাদ \n
আর লাগাতার আন্দোলন \n
হবে না ব্যর্থ ,হবে যথার্থ \n
গণ প্রতিবাদে জনগর্জন।\n
বিচার তোদের হবেই হবে,\n
যে যেখানে লুকিয়ে থাকিস। \n
ধরা তোদের পড়তেই হবে, \n
যেভাবেই মুখ লুকিয়ে রাখিস। \n
চিকিৎসক ঐ তিলোত্তমা,\n
সেবা ব্রতে নিবেদিতা-\n
কী যন্ত্রনায় চলে গেল,\n
অভাগিনী সেই মা'র দুহিতা !\n
এ কর্মক্ষেত্র না হায়নার দেশ !\n
যেখানে পশুরা বিচরণ করে\n
ফিটফাট সব বাবু সুবেশ।\n
লকলকে জিভ আর তীক্ষ্ণ দাঁত --\n
ছিড়ে খায় শান্ত এক ঘুমন্ত রাত!\n
কত আর্তনাদ ,কত যন্ত্রণা নিয়ে \n
চলে গেল আমার বোন !\n
ওরে ধর্ষক ,ওরে খুনি তোরা \n
শেষ সময়ের প্রহর গোন।\n
মৃত্যু তোদের চরম শাস্তি, \n
শান্তি পাবে আমার বোন-\n
যেদিন তোদের জ্বলবে চিতা, \n
শান্ত হবে মোদের মন। \n
বিচার পাবে আমার বোন, \n
বিচার পাবে পিতা -মাতা,\n
বিচার পাবে দেশবাসী। \n
তোদের 'পরে রইলো শুধু \n
ধিক্কার আর ঘৃণার রাশি।\n
ভাই -বোনেদের আন্দোলনে \n
উঠবে জেগে নতুন ভোর।\n 
নতুন সমাজ উপহার দেবে\n
সেবার মন্ত্রে হ'য়ে বিভোর।\n
ওরাই পারে চেতনার রঙে \n
রাঙিয়ে দিয়ে সবার মন-\n
কলুষ মুক্ত সমাজ গড়তে \n
দুর্নীতি-মুক্ত সেবাঙ্গন। \n
ওদের স্বপ্ন সফল হবে\n
আন্দোলনের বৈঠা বেয়ে;\n
মুক্ত করো, হে বিহঙ্গ দল\n
জননী তোমার মুখ পানে চেয়ে।`,
        author: "অনিমেষ মন্ডল",
        image: "Justice.png",
        audio: "WhatsApp Audio 2024-12-13 at 21.05.34_683bb903.waptt.opus",
        reactions: { love: 0, like: 0, laugh: 0 },
        comments: []
    }
];


// Reaction options with emojis
const reactionTypes = [
    { type: "love", emoji: "❤️" },
    { type: "like", emoji: "👍" },
    { type: "laugh", emoji: "😂" },
];

// Function to toggle the "About Me" section
function toggleAboutMe() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// Function to dynamically load poems into the webpage
function loadPoems() {
    const poemsSection = document.getElementById("poems");

    poems.forEach((poem, index) => {
        // Create poem container
        const poemDiv = document.createElement("article");
        poemDiv.classList.add("poem");

        // Left section for text
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("poem-content");

        const title = document.createElement("h2");
        title.textContent = poem.title;

        const content = document.createElement("p");
        content.innerHTML = poem.content.replace(/\n/g, "<br>"); // Preserve line breaks

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = `- ${poem.author}`;

        contentDiv.appendChild(title);
        contentDiv.appendChild(content);
        contentDiv.appendChild(author);

        // Right section for image
        const image = document.createElement("img");
        image.src = poem.image;
        image.alt = `${poem.title} image`;

        // Add audio button
        const audioButton = document.createElement("button");
        audioButton.classList.add("audio-btn");
        audioButton.innerHTML = "🎧 Listen to Poem";
        audioButton.addEventListener("click", () => playAudio(poem.audio));

        // Reaction Buttons
        const reactionsDiv = document.createElement("div");
        reactionsDiv.classList.add("reactions");

        reactionTypes.forEach((reaction) => {
            const button = document.createElement("button");
            button.classList.add("reaction-btn");
            button.innerHTML = `${reaction.emoji} <span class="reaction-count">0</span>`;
            button.addEventListener("click", () => handleReaction(index, reaction.type, button));
            reactionsDiv.appendChild(button);
        });

        // Comment Section
        const commentSection = document.createElement("div");
        commentSection.classList.add("comment-section");

        const commentsHeader = document.createElement("h3");
        commentsHeader.textContent = "Comments";
        commentSection.appendChild(commentsHeader);

        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        const commentInput = document.createElement("input");
        commentInput.type = "text";
        commentInput.placeholder = "Write a comment...";
        
        const commentButton = document.createElement("button");
        commentButton.textContent = "Post Comment";
        commentButton.addEventListener("click", () => postComment(index, commentInput));

        commentBox.appendChild(commentInput);
        commentBox.appendChild(commentButton);
        
        // Show existing comments
        poem.comments.forEach(comment => {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.textContent = comment;
            commentSection.appendChild(commentDiv);
        });

        // Append everything to the poemDiv
        poemDiv.appendChild(contentDiv);
        poemDiv.appendChild(image);
        poemDiv.appendChild(audioButton);
        poemDiv.appendChild(reactionsDiv);
        poemDiv.appendChild(commentSection);
        poemDiv.appendChild(commentBox);

        poemsSection.appendChild(poemDiv);
    });
}

// Audio playback function
function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Reaction handling logic
const reactionsData = poems.map(() => ({ love: 0, like: 0, laugh: 0 }));

function handleReaction(poemIndex, reactionType, button) {
    reactionsData[poemIndex][reactionType]++;
    const count = button.querySelector(".reaction-count");
    count.textContent = reactionsData[poemIndex][reactionType];
}

// Post a comment
function postComment(poemIndex, commentInput) {
    const commentText = commentInput.value.trim();
    if (commentText) {
        poems[poemIndex].comments.push(commentText);
        commentInput.value = ''; // Clear input after posting
        loadPoems(); // Reload poems to update the comments
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadPoems);
