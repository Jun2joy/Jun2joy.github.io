<script>
    const feedbackLink = "https://sydney.au1.qualtrics.com/jfe/form/SV_3jAqlzAnAoAOU8S";
    const authors = [
      { name: "Federico Tartarini", link: "https://www.linkedin.com/in/federico-tartarini/" },
      { name: "Ollie Jay", link: "https://au.linkedin.com/in/ollie-jay-793a1b11" },
      { name: "James Smallcombe", link: "https://twitter.com/smallcombe2?lang=en" }
    ];
    const contactEmail = "federico.tartarini@sydney.edu.au";
    const version = "0.0.3";
    let logo = "/icons/usyd-logo.png";
  </script>
  
  <footer  style="width: 100%; background-color: #E64626; padding: 1rem;">
    <div class="container p-2 my-2;">
      <div class="row">
        <div class="col">
          <p>
            <a href={feedbackLink} style="color: #333333; text-decoration: underline;">Click here to provide your feedback</a>
          </p>
  
          <p>Website authors: 
            {#each authors as { name, link }, $index}
              <a href={link} style="color: #333333; text-decoration: underline;">{name}</a>
              {#if $index !== authors.length - 1}, {/if}
            {/each}
          </p>
  
          <p>© 2023 - Heat and Health Research Incubator, USyd</p>
          <p>Version: {version}</p>
          <p><a href={"mailto:" + contactEmail} style="color: #333333; text-decoration: underline;">Contact Us</a></p>
  
        </div>
        <div class="col-auto" >
          <img src={logo} alt="USyd Logo" width="125px"/>
        </div>
      </div>
    </div>
  </footer>