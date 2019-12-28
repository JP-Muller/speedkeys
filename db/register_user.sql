INSERT INTO users(first_name, last_name, username, password, email, country, profile_pic) 
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *;