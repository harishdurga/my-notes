Data Access Layer is for Architects and Repository pattern is for developers.

## System Architecture
- How will the system work under heavy load?
- What will happen if the system will crash at this exact moment in the business flow?
- How complicated can be the update process?
- ....

#### Loose coupling
Consul is the service to create a service registry. Another one way to loose couple services is to use Gateway.
#### Stateless
#### Caching
Data that is accessed regularly but modified rarely is the one to be cached.
##### Types of caching
- In memory, in -progress cache
- Distributed cache


