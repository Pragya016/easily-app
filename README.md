# Job Portal Application

Welcome to the Job Portal Application! This application is built using Node.js and Express.js and provides a platform for users to find and apply for jobs.

## Functionality

### Authentication and Authorization

- **Recruiters CRUD Operations**:
  - Recruiters are granted permissions to perform CRUD (Create, Read, Update, Delete) operations specifically on job listings. This includes the ability to add new job listings, view existing listings, update details of listings, and delete listings as needed. These functionalities are accessible only after the recruiter has logged into the application, providing them with the necessary tools to manage job postings effectively.

- **Job Seekers Browsing Capability**:
  - Job seekers are allowed to browse through available job listings without the need to log in to the application. They can view details of various job opportunities posted on the platform, providing them with valuable information about potential employment opportunities. However, job seekers are restricted from performing CRUD operations such as adding, updating, or deleting job listings.

### Email Notification

- **Welcome Email**:
  - Upon registration, a welcome email is sent to the user's account to greet them. This feature enhances the user experience by providing a personalized touch and confirming successful registration.

### File Upload with Multer

- **Document Upload**:
  - Multer is utilized to enable users to upload files, such as resumes or cover letters, enhancing the application's functionality by allowing users to submit necessary documents along with their job applications.

### Form Validation

- **Data Integrity**:
  - Form validation ensures data integrity and accuracy by validating user inputs against predefined criteria, enhancing the application's reliability and user experience by preventing invalid data submissions.

## Usage

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/Pragya016/Easily-Job-Portal.git
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Create a `.env` file in the root directory and add the following details:
    ```
    PORT=3000
    DATABASE_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret_key>
    SENDER_EMAIL=<your_email_address>
    EMAIL_PASSWORD=<your_email_password>
    ```

4. Start the application:

    ```
    npm start
    ```

5. Access the application in your browser at `http://localhost:3000`.

## Future Development

- **User Interface**:
  - Currently, the focus is on implementing functionality. Once the core features are complete, UI enhancements and styling will be applied to improve the user experience.
