# ddd-crud
Example of implementing DDD over a CRUD in Nodejs

CRUD controllers, services and repositories would be common for any project.
Custom value objects and domain entities can be added in the proper "Customs" folders

Then, when in need of creating a new CRUD project, core structure can be reused with only customizing the "Customs" folder.
To execute it, after cloning the repository and having docker installed:

```shell
make docker
make run-docker
```

And to test the resources:

```shell
curl -X GET    "http://localhost:3000/users"
curl -X POST   "http://localhost:3000/users?surname=Palotes&name=Perico"
curl -X DELETE "http://localhost:3000/users/{uuid}"
```
## Contributing

Please have a look at our
[Contributing Guidelines](https://github.com/nmanero/ddd-crud/blob/master/docs/CONTRIBUTING.md) 
for instructions on setting up a development environment and contributing.