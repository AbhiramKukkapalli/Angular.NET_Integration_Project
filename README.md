This repository is a migration from a university enterprise account to a personal GitHub account, reflecting a broader audience and use case.

# Angular.NET Integration Project

This project, now titled "Angular.NET Integration Project," is an example of integrating Angular with ASP.NET Core in a cohesive manner. It's an evolution of the concepts discussed in the Pluralsight course, "Integrating Angular with ASP.NET Core RESTful Services." The primary aim is to illustrate a structured approach for combining these powerful technologies into a single project. 
## Project Objectives

- **Separation of Concerns:** Maintain a clear separation between Angular and ASP.NET Core codebases to facilitate independent updates and maintenance.
- **Angular Application Serving:** Utilize an MVC view, with the option to switch to Razor Pages, for serving the Angular application.
- **Flexibility:** Allow for the use of standard MVC controllers/views alongside the Angular application for more traditional web development needs.
- **Independent Development:** Enable the Angular project to run independently from the ASP.NET Core Web API, with CORS configured in `Startup.cs` to support this setup.

## Getting Started

To run the "Angular.NET Integration Project," follow these steps:

1. **Prerequisites:**
   - Node.js (version 14 or higher) - [Download](https://nodejs.org)
   - ASP.NET Core (version 5 or higher) - [Download](https://dot.net)
   - Angular CLI: Install with `npm install -g @angular/cli`

2. **Project Setup:**
   - Navigate to the `Client` directory and execute `npm install` to install dependencies.
   - Run `ng build --watch` in the same directory to start the Angular build process and monitor for changes.
   - In the project root directory, execute the following commands to prepare the ASP.NET Core environment:
     ```
     dotnet restore
     dotnet build
     dotnet watch run
     ```
   - Access the application at http://localhost:5000.

3. **HTTPS Certificate:** If encountering a certificate error, run `dotnet dev-certs https --trust` to trust the local development certificate.

## Running Angular and ASP.NET Core Separately

For scenarios where running Angular separately from ASP.NET Core is preferred:

1. Run the ASP.NET Core project using the commands outlined in the "Project Setup" section.
2. Modify the `apiUrl` in `Client/src/environments/environment.ts` to `http://localhost:5000/api/`.
3. Launch the Angular project with `ng serve -o`.
4. For Angular builds, adjust the `outputDirectory` in `Client/angular.json` to `dist`.

## Additional Information

- CORS has been enabled in `Startup.cs` for cross-origin requests, though it's recommended to tighten these settings for production.
- Cross-Site Request Forgery (XSRF) protection is enabled for Web API POST/PUT/DELETE methods by default. Consider adjusting this based on your authentication strategy.

This project stands as a testament to the integration capabilities of Angular and ASP.NET Core, offering a comprehensive guide for developers seeking to leverage both technologies in their web development projects.
