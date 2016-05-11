
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 _____       Raghav.M   Mariah.M  |  RCB    Week    16
/  __ \      Anthony.A  Kevin.H   |    Group Project
| /  \/ .----. .----. .----..----. .-.    .----.  .---.
| |    /  {}  \| {}  \| {}  |  {  }| |   /})    \/  ___}
| \__/\\      /|     /| {}  | }   }| `--.\.learn/\     }
 \____/ `----' `----' `----'`----' `----' `----'  `---'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You'll Learn, We Promise®
-------------------------

*"Bloc" - a combination of persons, groups, or nations forming a unit with a common interest or purpose*

CodeBloc Deconstructed
----------------------
* RCB centric coding/social message board. Focused on RCB and being local for now
* Utilize the express router to provide GET, POST, PUT & DELETE Functionality
* SEO Utilization meeting Google's basic guidelines
* Unit Testing using Mocha with Chai assertion library
* Heroku + Provisioned DB. VPS afterwards and for testing + DB Backups
* Angular as new framework
* Polished UI/UX utilizing Handlebars(Pug?), Bootstrap and CSS

-------------------------
Folder & File Structure
-------------------------
    -- node modules
    -- tests(Unit Testing)
    -- models(ORM/Schema)
    -- views(HTML & View-Templates)
      -- layouts
    -- controllers(Angular Module/Controllers)
    -- routes(Express Routing)
      - html routes
      - api routes
    -- public(Static Files & Client Side Code)
      -- assets
      -- stylesheets
      -- javascript
        - app.js(Angular app)
    -- config(DB config)
      - dbconnection.js
    - package.json
    - server.js(Express Setup)


* HIGH QUALITY CODE STANDARDS. Maintain consistent naming & labeling schema across the app. Utilize linters and the advanced IDE WebStorm
* User authentication done with the DB, GitHub, Google or other services

* Migration strategy
    - Cloning the DB and storing copies in desired format ~ Minimal Downtime
    - Writing all the info to a second DB ~ No Downtime, More Space + initial "work"