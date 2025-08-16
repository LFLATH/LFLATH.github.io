var linkedin = "https://www.linkedin.com/in/ludwig-lechtreck-884a34212/";
var instagram = "https://www.instagram.com/ludwig_lechtreck/";
var github = "https://github.com/LFLATH";
var email = "mailto:lechtreck.ludwig@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];
let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Ludwig! 👋</span>`,
  "<br>",
  `<li>🔧 I'm a Software Engineer passionate about fullstack development, distributed systems, and DevOps.</li>`,
  `<li>💡 Experienced with building scalable UIs, microservices, and CI/CD pipelines across industry and research settings.</li>`,
  `<li>🧠 Skilled in Java, Python, C++, TypeScript, and cloud platforms like Azure and GCP.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to explore what I’ve built!</li>`,
  `<li>👥 Always open to collaborating on impactful engineering projects.</li>`,
  `<li>📫 Contact: <a href="mailto:lechtreck.ludwig@gmail.com">lechtreck.ludwig@gmail.com</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'linkedin       <a href="https://linkedin.com/in/ludwig-lechtreck" target="_blank">linkedin.com/in/ludwig-lechtreck</a>',
  'github         <a href="https://github.com/LFLATH" target="_blank">github.com/LFLATH</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am.
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];

let projects = [
  "<br>",
  `<div id="projects-section">`,

  `<a href="https://github.com/LFLATH" target="_blank"><span class='underline'>ChromeOS Weather App</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
ChromeOS-native weather app built in a 6-person team; placed 2nd of 50+ at Georgia Tech's Junior Design Expo.
Built With:
- TypeScript
- React
- Maps API
- Figma, Jira
</pre>`,

  `<a href="https://github.com/LFLATH" target="_blank"><span class='underline'>PowerMap (Hackathon Winner)</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Hackathon-winning tool for building energy estimation using real-world datasets. 
Built With:
- Python
- Flask
- React
- GCP
- Maps API
</pre>`,

  `<a href="https://github.com/LFLATH" target="_blank"><span class='underline'>Asset Tracking Tool</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Internal tool to track assets and improve workflows at Factory Automation Systems.
Built With:
- C#
- WinForms
- SQL Server
</pre>`,

  "</div>",
  "<br>",
];
