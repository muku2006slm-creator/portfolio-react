import './App.css'

function App() {
  return (
    <>
      <h1 id="main-name">Mukundhan Selvakumar</h1>

      <p>B.Tech Computer and Communication Engineering student at Amrita Vishwa Vidyapeetham, currently in Semester 5.</p>

      <h2>About Me</h2>

      <p>
        I'm interested in Data Structures &amp; Algorithms, Machine Learning, and Embedded Systems. I'm an active competitive programmer on Codeforces, currently rated 965 under the handle <strong>keyboard_warrior06</strong>.
      </p>
      <h2>Skills</h2>

<h3>Languages</h3>
<ul>
    <li>Python</li>
    <li>Embedded C</li>
    <li>Assembly</li>
</ul>

<h3>Domains</h3>
<ul>
    <li>Data Structures &amp; Algorithms</li>
    <li>Machine Learning</li>
    <li>Internet of Things</li>
    <li>Embedded Systems &amp; Microcontrollers</li>
</ul>

<h3>Libraries/Tools</h3>
<ul>
    <li>pandas</li>
    <li>numpy</li>
    <li>Streamlit</li>
    <li>Git/GitHub</li>
</ul>

<h3>Databases</h3>
<ul>
    <li>MySQL</li>
</ul>

<h2>Projects</h2>

<h3 className="featured-project">Codeforces Performance Dashboard</h3>
<p>Python, Streamlit, pandas, Codeforces API</p>
<p>
  Built a dashboard that pulls contest and submission history via the Codeforces public API to surface performance patterns beyond raw rating — <strong>solve rate by difficulty band, weakest problem tags, and attempt efficiency</strong>.
</p>

<h3 className="featured-project">Cashback Optimizer</h3>
<p>Python, pandas</p>
<p>
  Built a greedy, cap-aware algorithm to assign the optimal credit card per transaction, maximizing cashback across category-specific monthly caps. Achieved <strong>56.6% more cashback</strong> on sample data (₹1,138 gain on ₹67,000 spend) and <strong>271.1% more</strong> on a real-world dataset of Indian credit card transactions (₹1,06,380 gain on ₹42.5L spend) vs. a single-card baseline.
</p>

<h2>Links</h2>

<div className="links-container">
  <a href="https://github.com/muku2006slm-creator">My GitHub</a>
  <a href="https://codeforces.com/profile/keyboard_warrior06">My Codeforces</a>
  <a href="mailto:muku2006slm@gmail.com">Email</a>
</div>

      
    </>
  )
}

export default App