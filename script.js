document.addEventListener("DOMContentLoaded", function () {
    fetch('notices.txt')
        .then(response => response.text())
        .then(data => {
            let notices = data.split("\n").filter(notice => notice.trim() !== "");
            let noticesList = document.getElementById("notices-list");
            noticesList.innerHTML = ""; // Clear loading text
            notices.forEach(notice => {
                let li = document.createElement("li");
                li.textContent = notice;
                noticesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error loading notices:", error);
        });
});
