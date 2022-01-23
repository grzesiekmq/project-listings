export function getItem(project) {
  const listingTemplate = `<div class="item">
    <p class="info"> Name </p>
    <p> ${project.name} </p>
    <hr>  
    <p class="info"> Languages </p>
    <p> ${project.languages} </p>
    <hr> 
    <p class="info"> Description</p>
    <p> ${project.desc} </p>
    <hr>
    <p class="info"> License </p>
    <p> ${project.license} </p>
    <hr>
    <p class="info"> Contributions</p>
    <p> ${project.contrib} </p>
    <hr>
    <a href=${project.code}>  
    
    <p> Source code 
    </p>
    </a>
    
    <a href=${project.live}>
    <p> Live version</p>
    
    </div>
    <p class="next">next project below<p>
    `;
  return listingTemplate;
}
