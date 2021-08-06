const dashboardPostHandler = async () => {
  window.location = "/dashboard/create";
};

document
  .querySelector("#newpost")
  .addEventListener("click", dashboardPostHandler);

const postContentHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/dashboard/edit/${id}`, {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace(`/dashboard/edit/${id}`);
    }
  }
};

const posts = document.querySelectorAll(".userPosts");
let i;
for (i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", postContentHandler);
}
