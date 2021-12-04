
# Creating an Extension:

My first code review- creating a Browser Extension


## Acknowledgements

 - [Amazing Series by Microsoft on Dev](https://github.com/microsoft/Web-Dev-For-Beginners)
 
## Paradigm:


*Preliminary setup*

1. Create Plain HTML UI
2. Install Dependensies via NPM: Axios
\
*Creating index.js*

3. Set up elements from HTML
4. Add listeners
5. Handle submit & clear button
6. Create init method
check values from **localStorage**: browser storage

7. Call API
Called using **axios** (read Docs)
\
Catch errors
\
\
*Performance*

8. Clear Cache -> DevTools -> Performance -> Generate Report
Event Log: check if > 15ms
\
Optimise the slowest-loading asset

9. Deliver right size and resolution images
10. **Use minimal tags & styles**. Add less used styles in-page/in-line


## Lessons

- Cache: Saved content (**external**- data)
- Cookies: Saved content (**internal**- user actions)
- New Syntax:
addEventListener("click", function(event) {
    \
&nbsp;&nbsp;&nbsp;&nbsp;            event.preventDefault(); 
\
});
\
--> Prevent default action of the event if not explicitly handled

## Research

### APIs
**Web APIs**
\
Accessed via HTTP protocol
\
Defines endpoints, and valid request and response formats
\
\
**Examples**

> API that communicate with browser- Services, Web notifications, **Web storage**
Types: Open, Internal, Partner, Composite
	
Catagorized by Architecture:
\
#### 1. **REST (Representational State Transfer)**
    - A web API architecture
            - Works with resources (documents)
            - Contains information in query parameters
Key constraints

    1. Client-server architecture (Backend,DB<->UI)
    2. Statelessnes (no client context on server between servers)
    3. Cacheability (explicit permisson to be given)
    4. Layered System (API works direct or via Load balancer)

#### 2. **RPC (Remote Procedural Call protocol)**
    - A protocol
        - Types: JSON-RPC & XML-RPC
        - Works with Actions
        - Contains no information

Key constraints

    1. Designed to call methods
    2. URI identifies the server, but has no information			

#### 3. **SOAP (Simple Object Access Protocol)**
    - A protocol
    - Extensible, neutral, independent

### Webpack
	- A bundler
		- A tool that puts your code and all its dependencies together in one JavaScript file
		- Required since

### Axios
	- 'Promise-based' HTTP request handler
		- Simplifies the process
		- Handlers errors

### Two Types of Web Storage
1. LocalStorage
- No cap on lifetime
- String stored as Key-Value pair in browser
- localStorage.setItem("key","value")
  localStorage.key = "value2"
  localStorage.removeItem("key")
- Find in DevTools>Storage

2. SessionStorage
- Lifetime until the tab closes/refresh
Rest same as LocalStorage
# Conclusion
I can now pull off README.md 😎