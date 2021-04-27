import React from 'react'
import $ from 'jquery'





function Skills() {

    $(document).ready(function(){
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });
    });

    return(
        <>
        <div className="skills">
        <h1>Technical Skills</h1>

<div class="skillbar clearfix " data-percent="90%">
	<div class="skillbar-title" style={{background: '#d35400'}}><span>React</span></div>
	<div class="skillbar-bar" style={{background: '#e67e22'}}></div>
	<div class="skill-bar-percent">90%</div>
</div> 

<div class="skillbar clearfix " data-percent="70%">
	<div class="skillbar-title" style={{background: '#2980b9'}}><span>JavaScript</span></div>
	<div class="skillbar-bar" style={{background: '#3498db'}}></div>
	<div class="skill-bar-percent">70%</div>
</div> 

<div class="skillbar clearfix " data-percent="85%">
	<div class="skillbar-title" style={{background: '#2c3e50'}}><span>Ruby on Rails</span></div>
	<div class="skillbar-bar" style={{background: '#2c3e50'}}></div>
	<div class="skill-bar-percent">85%</div>
</div> 

<div class="skillbar clearfix " data-percent="75%">
	<div class="skillbar-title" style={{background: '#46465e'}}><span>Ruby</span></div>
	<div class="skillbar-bar" style={{background: '#5a68a5'}}></div>
	<div class="skill-bar-percent">75%</div>
</div> 

<div class="skillbar clearfix " data-percent="90%">
	<div class="skillbar-title" style={{background: '#333333'}}><span>HTML/CSS</span></div>
	<div class="skillbar-bar" style={{background: '#525252'}}></div>
	<div class="skill-bar-percent">90%</div>
</div> 

<div class="skillbar clearfix " data-percent="75%">
	<div class="skillbar-title" style={{background: '#27ae60'}}><span>Redux</span></div>
	<div class="skillbar-bar" style={{background: '#2ecc71'}}></div>
	<div class="skill-bar-percent">75%</div>
</div> 

<div class="skillbar clearfix " data-percent="30%">
	<div class="skillbar-title" style={{background: '#124e8c'}}><span>SQL</span></div>
	<div class="skillbar-bar" style={{background: '#4288d0'}}></div>
	<div class="skill-bar-percent">30%</div>
</div> 

<div class="skillbar clearfix " data-percent="90%">
	<div class="skillbar-title" style={{background: '#333333'}}><span>JSX</span></div>
	<div class="skillbar-bar" style={{background: '#525252'}}></div>
	<div class="skill-bar-percent">90%</div>
</div> 
<div class="skillbar clearfix " data-percent="30%">
	<div class="skillbar-title" style={{background: '#46465e'}}><span>Sinatra</span></div>
	<div class="skillbar-bar" style={{background: '#46465e'}}></div>
	<div class="skill-bar-percent">30%</div>
</div> 

<div class="skillbar clearfix " data-percent="80%">
	<div class="skillbar-title" style={{background: '#2c3e50'}}><span>Product Management </span></div>
	<div class="skillbar-bar" style={{background: '#2c3e50'}}></div>
	<div class="skill-bar-percent">80%</div>
</div> 


<div class="skillbar clearfix " data-percent="65%">
	<div class="skillbar-title" style={{background: '#2980b9'}}><span>API</span></div>
	<div class="skillbar-bar" style={{background: '#3498db'}}></div>
	<div class="skill-bar-percent">65%</div>
</div> 

<div class="skillbar clearfix " data-percent="70%">
	<div class="skillbar-title" style={{background: '#27ae60'}}><span>REST</span></div>
	<div class="skillbar-bar" style={{background: '#2ecc71'}}></div>
	<div class="skill-bar-percent">70%</div>
</div> 

<div class="skillbar clearfix " data-percent="70%">
	<div class="skillbar-title" style={{background: '#46465e'}}><span>JSON</span></div>
	<div class="skillbar-bar" style={{background: '#46465e'}}></div>
	<div class="skill-bar-percent">70%</div>
</div> 

<div class="skillbar clearfix " data-percent="20%">
	<div class="skillbar-title" style={{background: '#d35400'}}><span>GIT</span></div>
	<div class="skillbar-bar" style={{background: '#e67e22'}}></div>
	<div class="skill-bar-percent">20%</div>
</div> 
</div>

        <div className="cert">
            <h1>Certifications</h1>
            <img />
            <img />
        </div>
</>

    )
}

export default Skills