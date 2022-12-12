# GCP
## Traits Of A Cloud

```mermaid
graph LR
    A(Traits Of A Cloud Provider) --> B(On-demand and self-service computing resources for customers)
    A --> C(Access to resources over the internet from any where)
    A -->D(Resources get allocated out from a pool)
    A -->E(Elasticty of the resources - Scale up or down)
    A -->F(Pay for only used resources or reserve as they go)
```

### Data Center Hierarchy
```mermaid
graph TD
    A(GCP)
    subgraph Locations
    A --> B(North America)
    A --> C(South America)
    A --> D(Europe)
    A --> E(Asia)
    A --> Australia
    end
    subgraph Regions
    D --> I(Europe-west2)
    end
    subgraph Zones
    I --> F(Europe-west2a)
    I --> G(Europe-west2b)
    I --> H(Europe-west2c)
    end
```
Any application can be deployed across multiple zones for app redundacy. Some of the services can also be deployed across different regions so that app can be 
accessible even when the one of the region is down.
