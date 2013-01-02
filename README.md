DrawSocket
==========

Simple Web Application for multiplayer drawing - written in Node.js and Javascript

License
=======
CC-BY-NC License version 3.0

Installation
============
* Download this project / fork this project.
* Download and install a http server of your choice. (nginx recommended)
* Download and install Node.js. (http://nodejs.org/)
* Install Socket.IO via npm. (enter npm install socket.io into the command line)
* (optional) Install Nodemon via npm. (npm install nodemon)
* Create a symbolic link to the http folder of this project (Windows: mklink /D "pathOfHTTPServerFolder" "pathOfProject/http") or copy the http folder right into the webservers http folder.

Running the Server
==================
(without nodemon):
* Open your command line.
* Navigate to the folder in which you saved this project.
* Type node server.js

(with nodemon):
* Open your command line.
* Navigate to the folder in which you saved this project. (required)
* Type nodemon server.js
