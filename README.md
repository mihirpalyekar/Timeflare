# timeflare


## Built With

This section lists the frameworks used to bootstrap the project.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![MaterialUI][MaterialUI]][MUI-url]
* [![Mocha][Mocha]][Mocha-url]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple  steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* mongodb
  ```sh
  sudo apt-get install -y mongodb-org
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/truecollab/timeflare.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install MongoDB
   ```sh
   wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -df -h
   echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
   sudo apt-get update
   sudo apt-get upgrade
   sudo apt-get install -y mongodb-org
   echo 'Mongo installed'
   sudo service mongod start
   sudo service mongod status
   ```

### Run the tests
This will set the data to default and run the tests.<br/>
Please run this before starting the project.

   ```sh
   npm run test
   ```

### Run the project

   ```sh
   npm run dev
   ```

## Use Case: Manage Tasks on Kanban Board
Steps:
1.  Login to the website
2.  Click on My Workspace
3.  Click on a Project card
4.  Click on Tasks tab
5.  Add Task Title and assignee information
6.  Click on Add button
7.  You should be able to see your task in ToDo column
8.  You can move the task between Todo, In Progress, Review and Done columns using -> and <- arrows
9.  You can delete a task by clicking on the cross icon

<!--
**Backend Setup**
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
df -h
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y mongodb-org
echo 'Mongo installed'
sudo service mongod start
sudo service mongod status
-->

## Issue Tracker
We used Jira platform to manage user stories and track our progress throughtout the course of the project.
<a href="https://collabforce.atlassian.net/jira/software/c/projects/COL/issues/">TrueCollab Jira</a> 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[MaterialUI]: https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[MUI-url]: https://mui.com/
[Mocha]: https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
