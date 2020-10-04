# Elastic Load Balancer

## Types

- ### Application Load Balacer
  Operates at OSI layer 7. Application aware. Best for HTTP and HTTPS traffic. Advanced request routing, sending specified requests to specific web servers.
- ### Network Load Balacer
  Operates at OSI layer 4. Best suited for load balancing of TCP traffic where extreme performance is required. Network load balancers are capable of handling millions of requests per second while maintaining ultra low latency. _Most costly load balancer_
- ### Classic Load Balancer
  Legacy Elastic load balancers. Can be used to load balance HTTP/HTTPS and use layer 7-Specific features such as X-Forwarded and sticky sessions. You can also use strict layer 4 load balancing for applications that rely purely on the TCP protocol.

## Load Balancer Errors

- If your application stops responding the ELB(Classic) responsds with a **504** error(Gateway Timeout). The problem is with the application and not the ELB.

## Points to Remember

- **X-Forwarded-For Header:** This header is used to determine the public ipV4 address from where the request is originated from when the application is running behind the load balancer.
