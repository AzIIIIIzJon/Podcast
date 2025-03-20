# <img src="https://webengineering.ins.hs-anhalt.de:10131/logo.svg" alt="Logo" width="40"> WMP-PodKatz-2024

[![Wiki](https://img.shields.io/badge/WIKI-yellow?style=for-the-badge)](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/-/wikis/home)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge) 

<hr>

[![FrontEnd](https://img.shields.io/badge/FrontEnd_Project_(PORT:10131,_/api/v2)-blue?style=for-the-badge)](https://webengineering.ins.hs-anhalt.de:10131/)
[![BackEnd](https://img.shields.io/badge/BackEnd_API_(PORT:10131)-darkblue?style=for-the-badge)](https://webengineering.ins.hs-anhalt.de:10131/api/v2)

[![Swagger](https://img.shields.io/badge/API_Documentation_(PORT:10132)-purple?style=for-the-badge)](http://webengineering.ins.hs-anhalt.de:10132/)
[![MongoExpress](https://img.shields.io/badge/MongoExpress_(PORT:10133)-red?style=for-the-badge)](http://webengineering.ins.hs-anhalt.de:10133/)

<hr>

## Explanation

### Tech Stack
- Frontend: **React, NextJS**
- Backend: **NextJS**
- Database: **MongoDB**

### Pipeline

The Pipeline consists of three parts:

1. `build stage`
2. `test stage`
3. `deploy stage`

> These stages will be run sequentially. The results are three Docker images, each deployed with a separate tag in the same [container registry](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/container_registry/166):

[![Docker Image](https://img.shields.io/badge/wmp--podkatz--24-next--server-007ec6?style=flat-square&logo=docker)]([gitlab.hs-anhalt.de:5050/lenmaryou/wmp-podkatz-24:prod-next](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/container_registry/166))
[![Docker Image](https://img.shields.io/badge/wmp--podkatz--24-nginx--server-007ec6?style=flat-square&logo=docker)]([gitlab.hs-anhalt.de:5050/lenmaryou/wmp-podkatz-24:prod-next](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/container_registry/166))
[![Docker Image](https://img.shields.io/badge/wmp--podkatz--24-swagger--ui-007ec6?style=flat-square&logo=docker)](gitlab.hs-anhalt.de:5050/lenmaryou/wmp-podkatz-24:prod-next](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/container_registry/166))

### Deployment/Architecture

On the actual server, we just run [this `docker-compose.yml`](https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24/-/blob/prod-next/docker/server-docker-compose.yml?ref_type=heads). This will run all the Docker images as actual containers. This includes Watchtower to check for changes in the registry and update the Docker containers accordingly. This also includes the MongoDB database and a Mongo Express container for easy web-based access to the database.

Some important volumes will also be mounted:
- A `logs` folder containing the logs generated from the Next.js server.
- A folder named `certs`, which must contain the certificates (`server.crt`, `server.key`).

Credentials or database connection environment variables are inserted via an `.env` file, which needs to be in the same folder as the Docker Compose file.

> The ports mentioned above are assigned here too.

### Notable

Our framework of choice is Next.js; therefore, we do not follow the traditional frontend/backend separation, as Next.js combines both. It serves modified React code for the frontend while utilizing server components for backend functionality.

This structure makes it less obvious where our API resides. To maintain clarity, we have separated the API endpoints under `/api/{v1/v2}/...`.

The full documentation can be found in our [Swagger documentation](http://webengineering.ins.hs-anhalt.de:10132/).


<hr>

<br>
<br>
<br>
<br>

<details>
  <summary>Development</summary>

  ### Install
  Navigate to an empty folder or create an empty folder and navigate to it.

  Make sure you have [git](https://git-scm.com/) and [node](https://nodejs.org/en/download) installed.

  ```shell
  git clone https://gitlab.hs-anhalt.de/lenmaryou/wmp-podkatz-24.git
  ```

  ### Docker Development Setup

  This project uses Docker for both development and production environments. Follow the instructions below to run the application.

  ## Prerequisites

  - Docker
  - Docker Compose

  ## Running in Development Mode

  To run the application in development mode with hot reloading, use the following command:

  ```shell
  npm run dev:start
  ```
  Other useful commands:
  ```shell
  npm run dev:restart # Combination of stop and start
  npm run dev:stop
  npm run dev:rm
  npm run dev:start-d # Like a normal start, but in detached mode
  ```

  ## Using

  If everything worked, you should now be able to click [HERE](http://localhost:3000) to open the website.

  [THIS](http://localhost:8081) can be used to manage the database (MongoDB) with a web interface (Mongo Express).

  ## Development Research

  ... *(Content remains unchanged)* ...

  ## Production Setup (SSL)

  If you want to include an SSL certificate, please do the following:
  1. Use the latest build of the GitLab repository.
  2. Run the server using the `docker/server-docker-compose.yml` Docker Compose file. Make sure to mount the folder containing the certificates (set the following path: `/path/to/your/certs`). The server expects `server.key` and `server.crt` files.
  3. Run the server.

  > Make sure not to push the cert files. I have excluded the folder in the `.gitignore`, but ensure that they are *not included* in any commit.
</details>
