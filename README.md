### Authentication vs Authorization:
# What is the difference between Authentication and Authorization in our code?

- Authentication checks who the user is by verifying their login details like email and password. Authorization checks what the user is allowed to do after they log in, such as accessing certain routes, data, or admin features.

### Security (bcrypt):
# Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?

- We use bcryptjs to hash passwords before saving them in the database. This makes the passwords secure because the real password is not stored directly. If someone gets access to the database, they will only see the hashed version, not the actual password.

### JWT Structure:
# What does the protect middleware do when it receives a JWT from the client?

- When the protect middleware receives a JSON Web Token from the client, it verifies if the token is valid. If the token is correct, it extracts the user information and allows access to protected routes. If the token is invalid or missing, the request is denied.