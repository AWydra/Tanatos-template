    const bar = document.querySelector(".scroll");
    const statusBar = () => {
      currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
      bar.style.width = currentScroll + "%";

      //console.log(currentScroll);
    }

    window.addEventListener("scroll", statusBar);