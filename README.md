### Why did I choose to Embed the [Review]?

- I chose to embed the reviews because each review belongs to one user. Since one user can have multiple reviews (one-to-many relationship), embedding keeps all related data in a single document. This makes it easier and faster to retrieve a user and their reviews together.

### Why I Chose to Reference the Chef

- I chose to reference the Chef because a chef can be associated with many records (such as recipes), and the same chef data may be reused in different documents. Referencing avoids duplicating chef information and keeps the data more organized and consistent. Therefore, it is important to use referencing if the data or values are get getting complex or grow at the time. It helps to prevent any data error or challenges within the system.
