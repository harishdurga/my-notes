```mermaid
graph TD;
    A[Breakingdown a Monolith]-->B(Break By Team: Break by Conway \n Ex: if one org has 8 team then they will have 8 microservices);
    A-->C(Break by subdoamin: Break by table \n Ex: A seprate microservice for every table in the DB.);
    A-->D(Break by functionality: Break to scale.);
```

## Causes for Distributed Monolith:
- Incorrect division
- Too much business logic in shared library. Every time we need to release the latest version all the services which uses this library needs to be deployed. So having backward compatibility withing the library makes it optional to redeploy all the dependent sevices for the library.
- CI/CD Coupling.

## Scaled Independently

## Common Functionality
- Authentication/Authorization
- Configuration
- Monitoring
- Health Checks
- Common business logic(!)
