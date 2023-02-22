

function Header(){
   return( <header>
    <nav>
        <img src="./react-logo.png" width="40px" />
    </nav>
</header>
   )
}

function Footer(){
   return (
    <footer>
       <small>© 2023 Hannah development. All rights reserved.</small>
    </footer>
   )
}

function MainContent(){
    return(
        <div>
       <Header />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walker</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is mainitained by Facebook</li>
            <li>Powers through thousands of enterprise apps, including mobile apps</li>
        </ul>
        <Footer />
    </div>
    )
}


ReactDOM.render(<MainContent />, document.getElementById("root"))