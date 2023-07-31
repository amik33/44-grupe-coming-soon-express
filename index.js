import express from 'express';
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coming soon</title>
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./favikon/favicon-16x16.png">
        <link rel="manifest" href="./favicon/site.webmanifest">
        <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="./css/pages/home.css">
    </head>
    <body>
        <main>
            <section class="container bg-main hero">
                <div class="row-short">
                    <img class="logo" src="./img/favicon.png" alt="Logo">
                    <h1 class="main-title">Coming soon</h1>
                    <p class="main-description">Lorem ipsum dolor sit amet con</p>
                    <div class="clock">
                        <div class="time">
                            <div class="value">432</div>
                            <div class="label">Days</div>
                        </div>
                        <div class="time">
                            <div class="value">89</div>
                            <div class="label">Hours</div>
                        </div>
                        <div class="time">
                            <div class="value">37</div>
                            <div class="label">Minutes</div>
                        </div>
                        <div class="time">
                            <div class="value">39</div>
                            <div class="label">Seconds</div>
                        </div>
                    </div>
                    <form class="type-email">
                        <label for="email">Type your email</label>
                        <input id="email" type="email" placeholder="Type your email" autocomplete="email" required>
                        <button class="btn" type="submit">Subscribe Now</button>
                    </form>
                    <div class="mouse"></div>
                </div>
            </section>
            <section class="container">
                <div class="row">
                    <div class="column">
                        <h2>About startup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, provident. ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, adipisci.</p>
                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">UX Design</div>
                                <div class="value">90%</div>
                            </div>
                            <div class="bottom">
                                <div class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">Web Design</div>
                                <div class="value">86%</div>
                            </div>
                            <div class="bottom">
                                <div style="width: 86%;" class="progress">
                                    <div class="bar"></div>
                                </div>  
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="top">
                                <div class="label">Web Development</div>
                                <div class="value">50%</div>
                            </div>
                            <div class="bottom">
                                <div style="width: 50%;" class="progress">
                                    <div class="bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right-column">
                        <h2>Have any question?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, voluptatum., ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa.</p>
                        <form class="form">
                            <label for="name">Name</label>
                            <input id="name" type="text" placeholder="Name" autocomplete="name" required>
                            <label for="email">Email</label>
                            <input id="email" type="email" placeholder="Email" autocomplete="email" required>
                            <label for="message">Message</label>
                            <textarea id="message" placeholder="Message" required></textarea>
                            <button class="btn" type="submit" >Send message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        <footer class="container bg-main">
            <div class="row">
                <div class="socials">
                    <a class="fa fa-facebook" href="#"></a>
                    <a class="fa fa-twitter" href="#"></a>
                    <a class="fa fa-dribbble" href="#"></a>
                    <a class="fa fa-tumblr" href="#"></a>
                    <a class="fa fa-linkedin" href="#"></a>
                    <a class="fa fa-instagram" href="#"></a>
                    <a class="fa fa-wifi" href="#"></a>
                </div>
                <a class="btn btn-circle fa fa-angle-up" href="#"></a>
            </div>
            <div class="row-short">
                <img class="footer-logo" src="./img/logo-wide.png" alt="logo">
                <div class="text-trio">
                    <p>Copyright &copy; 2023 <a href="#">Matrox</a></p>
                    <p>All right reserved</p>
                    <p>Designet by <a href="#" target="_blank">Trendy theme</a></p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Matrox</a> Optio, tempora, dolores odio <a href="#">Matrox</a> libero?</p>
            </div>
        </footer>
    </body>
    </html>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})