<p align="center">
  <a href="#about-application">About Application</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to Run</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="project-status">Project Status</a>
</p>

</br>

## About Application

A notifications microservice built with [NestJS](https://nestjs.com/) during the [Rocketseat](https://rocketseat.com.br/) Ignite Lab event.

## Technologies

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://nodejs.org/en/" title="Node"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" alt="Node logo image." /></a>
    </td>
    <td>
      <a href="https://www.typescriptlang.org/" title="TypeScript"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="Typescript logo image." /></a>
    </td>
    <td>
      <a href="https://nestjs.com/" title="NestJS"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nestjs.svg" alt="NestJS logo image." /></a>
    </td>
    <td>
      <a href="https://www.prisma.io/" title="Prisma ORM"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="Prisma ORM logo image." /></a>
    </td>
    <td>
      <a href="https://jestjs.io/" title="Jest"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/jest-2.svg" alt="Jest logo image." /></a>
    </td>
    <td>
      <a href="https://kafka.js.org/" title="Kafka"><img width="128" height="128" src="https://kafka.js.org/img/kafkajs-logoV2.svg" alt="Kafka logo image." /></a>
    </td>
  </tbody>
</table>

## How to Run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/ignite-lab-nestjs/
```

Open each of the folders and run the command below to install the project's dependencies.
```bash
npm install
```

</br>

<b>Note</b>: Before starting the server, you will need to configure your Kafka access details in the .env file.

</br>

Now in the notifications-service folder, run the command to start the server:
```bash
npm run start:dev
```

With the server started, open the Kafka-producer folder and run the command below to make the "producer" send messages to the Kafka service.
```bash
node producer.js
```

Finally, you can open Prisma studio and check if the messages were sent and saved in the database.
```bash
npx prisma studio
```

If you want to test run the command:
```bash
npm run test
```

## Project Status

> Status: Completed.

<hr/>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis</b></a>.</p>
