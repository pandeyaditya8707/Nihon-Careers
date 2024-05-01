# Nihon Careers

Our project is a job portal website tailored for the Japanese market, leveraging React technology to connect job seekers with employment opportunities across Japan's diverse industries, while empowering employers to efficiently manage their recruitment processes in the Japanese business landscape.

## Features

1 Job Posting & Search: Efficiently post and find job opportunities tailored to users' preferences.

2 User Authentication & Profiles: Securely manage profiles and track application statuses.

3 Advanced Filtering & Recommendation: Personalized job suggestions based on skills and experience.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express,MongoDB

## Installation

Install my-project
git clone>
cd nihon careers>cd client >npm install @vitejs/plugin-react --save-dev

backend
cd server>npm install>npm start

## API DOCUMENTATION

API Endpoints:
Register a User:

Endpoint: /api/register

Method: POST

Description: Registers a new user account.

Request Body: { "firstName": "John", "lastName": "Doe", ... }
Response: { "success": true, ... }

Sign In:

Endpoint: /api/signin

Method: POST

Description: Authenticates a user and

generates a JWT token.

Request Body: { "email": "john@example.com", "password": "password" }
Response: { "success": true, ... }
