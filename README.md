# SpringBoot-Webapp-with-S3-Image-Uploader (ClientTrack)

ClientTrack is a simple full-stack web application built with Spring Boot and React.js, designed to manage client information and facilitate file uploads to Amazon S3. The following provides an overview of its features, setup instructions, and usage details.

**You can access the live AWS S3 EC2 hosted web application [HERE](http://client-track-frontend.s3-website-us-west-1.amazonaws.com/dashboard/customers)**

## Features

1. **Client Information Management**:
   - **Profile Image Upload**: Users can upload and update profile images using AWS S3 storage.
   - **Detailed Client Profiles**: Includes fields for name, age, gender, email, and profile image.

2. **Ease of Use**:
   - **Responsive Design**: Ensures seamless usability across desktop and mobile devices.
   - **Drag-and-Drop Upload**: Intuitive file upload mechanism for images.

3. **Analytics and Insights**:
   - **Client Insights**: Provides insights into client interactions and demographics.
   - **Dashboard**: Displays client counts per month for analytics purposes.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Spring Boot 3
- **Database**: AWS RDS PostgreSQL
- **File Storage**: AWS S3
- **Deployment**: AWS EC2 (Backend), AWS S3 (Frontend)

## Docker Integration

The project includes Docker containers for:
- PostgreSQL Database
- Spring Boot API
- React Environment

## Authentication and User Management

- **Login Authentication**: Secure login system for users.
- **Signup**: Registration page for new users.

## Testing

- **Unit Testing**: Spring Boot unit tests using Mockito framework to ensure application functionality and integrity.

## Deployment

- **Build**: Maven for dependency management and building backend API jar file.
- **Deployment**: Backend API deployed on AWS EC2, frontend deployed on AWS S3.

## Setup Instructions

1. **Clone Repository**:
   ```bash
   git clone <repository-url>
   cd ClientTrack

2. **Build and Run Backend:**:
   ```bash
   cd backend
   mvn clean install
   java -jar target/clienttrack-backend.jar

3. **Build and Run Frontend:**:
   ```bash
   cd /frontend/react/
   npm install
   npm run dev
   
