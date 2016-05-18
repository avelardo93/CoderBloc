
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 _____       Raghav.M   Mariah.M  |  RCB    Week    16
/  __ \      Anthony.V  Kevin.H   |    Group Project
| /  \/ .----. .----. .----..----.   .----. .-.    .----.  .---.
| |    /  {}  \| {}  \| {__'| {}  }  | {}  }| |   /})    \/ /```
| \__/\\      /|     /| {__ | .-. \  | {}  }| `--.\.learn/\ \__.    
 \____/ `----' `----' `____''_' '_'  `----' `----' `----'  `---'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You'll Learn, We Promise®
-------------------------

*"Bloc" - a combination of persons, groups, or nations forming a unit with a common interest or purpose*

CoderBloc Deconstructed
-----------------------
* RCB support network with message board, projects and live help. Focused on RCB and being local for now
* Utilize the express router to provide GET, POST, PUT & DELETE Functionality
* SEO Utilization meeting Google's basic guidelines
* Unit Testing using Mocha with Chai assertion library
* Heroku + Provisioned DB. VPS afterwards and for testing + DB Backups
* Angular as new framework
* Polished UI/UX utilizing Handlebars(Pug?), Bootstrap and CSS

-------------------------
Folder & File Structure
-------------------------
    --CoderBloc
      -- config(DB config)
        - dbconnection.js
      -- controllers(Angular Controllers)
      -- models(Sequelize Models)
      -- routes(Express Routing)
        - html-routes.js
        - api-routes.js
      -- tests(Unit Testing)
      -- views(HTML & View-Templates)
        -- layouts
    -- public(Static Files & Client Side Code)
      -- assets
        -- images
        -- stylesheets
        -- javascript
    -- node modules
    - package.json
    - README.md
    - server.js(Express Setup)


* HIGH QUALITY CODE STANDARDS. Maintain consistent naming & labeling schema across the app. Utilize linters and the advanced IDE WebStorm
* User authentication done with the DB, GitHub, Google or other services

* Migration strategy
    - Cloning the DB and storing copies in desired format ~ Minimal downtime
    - Writing all the info to a second DB ~ No Downtime, More space + initial "work"