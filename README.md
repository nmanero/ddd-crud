# ddd-crud
Example of implementing DDD over a CRUD in Nodejs

CRUD controllers, services and repositories would be common for any project.
Custom value objects and domain entities can be added in the proper "Customs" folders

Then, when in need of creating a new CRUD project, core structure can be reused with only customizing the "Customs" folder.
To execute it, after cloning the repository and having docker installed:

```shell
make docker
make docker-run
```

And to test the resources:

```shell
curl -X POST "http://localhost:3000/user?surname=Palotes&name=Perico"
```
