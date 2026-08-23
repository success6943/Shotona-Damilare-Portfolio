console.log("Shotona Damilare Portfolio Loaded Successfully");


const projectItems = document.querySelectorAll(".project-item");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


projectItems.forEach((project) => {

    project.style.opacity = "0";

    project.style.transform = "translateY(40px)";

    project.style.transition = "0.8s ease";

    observer.observe(project);

});
