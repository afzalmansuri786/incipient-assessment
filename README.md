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

Please refer to the below API documentation in tabular form for detailed usage of these features.

Here's a tabular format listing the APIs, their routes, required input data, and output data types for the `/users`, `/user-images`, `/roles`, and `/user-roles` routes:

### `/users` Endpoints

| Endpoint                                      | Method | Description                             | Input Data (JSON)                                       | Output Data (JSON)                  |
|-----------------------------------------------|--------|-----------------------------------------|---------------------------------------------------------|------------------------------------|
| `/users/create`                               | POST   | Create a user                           | User data including first name, last name, email, etc. | Created user data                  |
| `/users`                                      | GET    | Retrieve all users with assigned roles | None                                                    | List of users with roles           |
| `/users/:id`                                  | GET    | Retrieve a single user by ID           | User ID                                                 | Single user data                   |
| `/users/:userId/allDetails`                   | GET    | Retrieve a single user with all details | User ID                                                 | User details with roles and images |
| `/users/:id`                                  | PUT    | Update a user                           | User ID, updated user data                              | Updated user data                  |
| `/users/:id`                                  | DELETE | Soft delete a user                     | User ID                                                 | None                               |

### `/user-images` Endpoints

| Endpoint                    | Method | Description          | Input Data (JSON)  | Output Data (JSON)  |
|-----------------------------|--------|----------------------|--------------------|--------------------|
| `/user-images/upload`       | POST   | Upload a user image  | User ID, image file | Uploaded image data |
| `/user-images/:id`         | GET    | Get user image by ID | Image ID           | User image data     |
| `/user-images/:id`         | PUT    | Update user image    | Image ID, new image | Updated image data  |
| `/user-images/:id`         | DELETE | Delete user image    | Image ID           | None                |

### `/roles` Endpoints

| Endpoint                 | Method | Description     | Input Data (JSON) | Output Data (JSON) |
|--------------------------|--------|-----------------|-------------------|-------------------|
| `/roles/create-role`     | POST   | Create a role   | Role name         | Created role data  |
| `/roles`                 | GET    | Get all roles   | None              | List of roles      |
| `/roles/:id`             | GET    | Get role by ID  | Role ID           | Role data          |
| `/roles/:id`             | PUT    | Update a role   | Role ID, new name | Updated role data  |
| `/roles/:id`             | DELETE | Delete a role   | Role ID           | None               |

### `/user-roles` Endpoints

| Endpoint                | Method | Description           | Input Data (JSON)       | Output Data (JSON) |
|-------------------------|--------|-----------------------|-------------------------|-------------------|
| `/user-roles/create`    | POST   | Create a user role    | User ID, Role ID        | Created user role |
| `/user-roles`           | GET    | Get all user roles    | None                    | List of user roles |
| `/user-roles/:id`       | GET    | Get user role by ID   | User Role ID            | User role data     |
| `/user-roles/:id`       | PUT    | Update a user role    | User Role ID, new data  | Updated user role |
| `/user-roles/:id`       | DELETE | Delete a user role    | User Role ID            | None              |

