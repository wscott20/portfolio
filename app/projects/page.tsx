import styles from "@/page.module.css";
export default function Projects() {
  return (
    <div className="page">
      <main className={styles.main}>
        <h3>Independent projects</h3>
        <ul>
          <li><a href="https://github.com/wscott20/js-utils">Small javscript utilities</a>: some scripts I made to use in web projects or simply in the console to make certain tasks easier like converting SVG to an image or shortening long method calls</li>
          <li><a href="https://github.com/wscott20/py_cli_template">Python command-line-interface template</a>: a template to start up a command line tool built in Python</li>
          <li><a href="https://github.com/wscott20/svg-editor">SVG editor</a>: an interactive tool for creating and editing SVG images</li>
          <li><a href="https://github.com/wscott20/snake-py">Snake in python</a>: one of my first Python projects - making snake game with <a href="https://www.pygame.org/">pygame</a></li>
          <li><a href="https://github.com/wscott20/calculator-reactjs">Calculator in react.js</a>: calculator made in react.js (scientific, graphing, and normal calculator) (in progress)</li>
        </ul>
        <h3>Collaborated projects (not publicly available)</h3>
        <ul>
          <li>Sensor publishers for test-data for robotic sensors for ROS (robot operating system - software that allows different parts of a robot to talk to each other and to the user)</li>
          <li>Web dashboard for data from robotic helicopter sensors like altitude, fuel, temperature, etc</li>
        </ul>
        I will post more projects upon completion.
      </main>
    </div>
  );
}
