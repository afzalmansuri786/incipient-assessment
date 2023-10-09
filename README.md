# Node Express TypeScript CRUD API

This is a sample Node.js, Express.js, and TypeScript CRUD API project for managing user data, including user roles and images.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

- **Git**: If you haven't already, install Git from [https://git-scm.com/](https://git-scm.com/).

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/afzalmansuri786/incipient-assessment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd incipient-assessment
   ```

3. Install project dependencies:

   ```bash
   yarn install
   ```

## Running the Server

To run the server in development mode, use the following command:

```bash
yarn run ts:dev
```

The server will start at `http://localhost:3000`.

## Basic Features

### User Management

- **Create User**: Create a new user with fields like first name, last name, email, password, phone, and code. Users can belong to one or many roles and can have zero, one, or multiple images.

- **Update User**: Update user information, including first name, last name, email, phone, code, roles, and images. Old images are preserved.

- **Delete User**: Perform a soft delete on a user by updating the `deleted_at` field.

- **View Users with Roles**: Retrieve a list of users with their assigned roles, excluding deleted records.

- **View Single User with All Fields & Images**: Retrieve a single user's details, including all fields and associated images.

### Role Management

- **Create Role**: Create a new role with a unique name.

- **Read Roles**: Retrieve a list of all roles, excluding deleted records.

- **Update Role**: Update the name of a role.

- **Delete Role**: Delete a role if it's not assigned to any user.

Please refer to the API documentation for detailed usage of these features.
