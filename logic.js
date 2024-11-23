// Sample Poems Data (move to poems.js if separate)
const poems = [
    {
        title: "The Silent Night",
        content: "The moonlight dances on the lake...\nAs stars like whispers softly speak.",
        author: "Animesh Mandal",
        image: "The_silent_night.jpg"
    },
    {
        title: "A Gentle Breeze",
        content: "The wind sweeps lightly across the field...\nIts touch, a secret gently revealed.",
        author: "Animesh Mandal",
        image: "Winds_of_change.jpg"
    }
    // Add more poems here
];
function toggleAboutMe() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// Function to dynamically load poems into the webpage
function loadPoems() {
    const poemsSection = document.getElementById("poems");

    poems.forEach(poem => {
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

        // Add both sections to the poem box
        poemDiv.appendChild(contentDiv);
        poemDiv.appendChild(image);

        // Append to poems section
        poemsSection.appendChild(poemDiv);
    });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadPoems);
