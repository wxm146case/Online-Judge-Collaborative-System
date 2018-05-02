# Online-Judge-Collaborative-System
This is a full-stack project with an Angular based front end, NodeJS based restful API, and docker based code execution engine. We created multiple components in the front end to allow users to review and add problems and provide solution. The data is passed to the restful API, which in turn saves to MongoDB. Multiple users can also collaborate on problems real-time using websocket.

• Implemented a web-based collaborative code editor which supports multiple user
editing simultaneously (ACE, Socket.io, Redis);

• Designed and developed a single-page web application for coding problems
(Angular2, Auth0, Node.js, MongoDB);

• Built a user-code executor service which can build and execute user’s code
(Docker, Flask);

• Refactored and Improved system throughput by decoupling services using
RESTful API and loading balancing by Nginx (REST API, Nginx).

# Quick Start
git clone https://github.com/wxm146case/Online-Judge-Collaborative-System.git

cd Online-Judge-Collaborative-System

sudo bash ./launcher.sh

# Architecture
![image](https://github.com/wxm146case/Online-Judge-Collaborative-System/blob/master/pictures/Structure.PNG)

# Screenshots
![image](https://github.com/wxm146case/Online-Judge-Collaborative-System/blob/master/pictures/ProblemList.png)

![image](https://github.com/wxm146case/Online-Judge-Collaborative-System/blob/master/pictures/Edit.png)




