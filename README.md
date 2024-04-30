# YAAO
Yet Another Aerodome Overlay!

1. Install NodeJs from the following link:

    https://nodejs.org/en/download/current

2. Open a command prompt to the source code folder, then install the web server and socket connection prerequisites using the below commands:

    cmd.exe /c npm.cmd install express@4
    cmd.exe /c npm.cmd install socket.io

3. Run the overlay web server using the below command (from within the project folder):

    node index.js

4. Add the following local web server URL to OBS as a browser source:

    http://localhost:3000/live

5. Configure your stream settings via opening a web browser to the following settings page:

    http://localhost:3000/
