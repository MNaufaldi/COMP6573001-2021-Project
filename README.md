# COMP6573001-2021-Project
Team member:
1. Muhammad Naufaldi (Me)

# Overview
The project is going to be something similar to wikipedia / blog where it would display 3 categories that are available currently.
Categories:
1. Books
2. Cat
3. Food

I will be using docker to containerized each services and separate their database. Despite separating the database, I am still using graphql. The reason for that is mainly I wanted to learn about graphql.

Tech that are used in this project are:
1. React js
2. Node and express
3. Graphql
4. Mongodb
5. Kubernetes
6. Docker

# Backend
The backend will be using express, graphql, and mongo following the tutorial from
[Github link](https://github.com/tariqulislam/express-graphql-with-mongoose )

# Frontend
Frontend will be using React with axios that will connect to the backend. Despite having the create functions in the backend and query file, there are no features for that and it is solely for adding data manually through graphql interface. 

# Docker and Kubernetes
I am following the tutorial from [Udemy Link](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/) Although this tutorial creates a project about fibonacci and a lot of the materials are deprecated.

# MongoDb and graphql
I am using mongo alongside graphql for this project. The main reason is that it doesn't require the structure that sql provides. There are 3 mongo databases which should be connected through the .env file following the example of sample.env.
Each services has its own database and each database has 2 collections.
1. Books -> Book, Author
2. Cats -> Cat, Breeds
3. Foods -> Foods, Types

Each collections have 5 graphql query which is:
1. Get the list of all item
2. Get one specific item with id
3. Create item
4. Update item
5. Delete item

# Running the code
After creating .env file inside src folder. You can run:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml
kubectl apply -f k8s
```
Access http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/ and then use the token option and fill in the token.
And it will start in localhost

# Resources
I also followed [Github repo](https://github.com/fChristenson/microservices-example/tree/master/web) as a reference too.
