import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const railsNewOutput = `
❯ rails new project -d postgresql -c postcss -j esbuild -a propshaft
      create
      create  README.md
      create  Rakefile
      create  .ruby-version
      create  config.ru
      create  .gitignore
      create  .gitattributes
      create  Gemfile
         run  git init from "."
Initialized empty Git repository in /Users/alex/project/.git/
      create  app
      create  app/assets/config/manifest.js
      create  app/assets/stylesheets/application.css
      create  app/channels/application_cable/channel.rb
      create  app/channels/application_cable/connection.rb
      create  app/controllers/application_controller.rb
      create  app/helpers/application_helper.rb
      create  app/jobs/application_job.rb
      create  app/mailers/application_mailer.rb
      create  app/models/application_record.rb
      create  app/views/layouts/application.html.erb
      create  app/views/layouts/mailer.html.erb
      create  app/views/layouts/mailer.text.erb
      create  app/assets/images
      create  app/assets/images/.keep
      create  app/controllers/concerns/.keep
      create  app/models/concerns/.keep
      create  bin
      create  bin/rails
      create  bin/rake
      create  bin/setup
      create  config
      create  config/routes.rb
      create  config/application.rb
      create  config/environment.rb
      create  config/cable.yml
      create  config/puma.rb
      create  config/storage.yml
      create  config/environments
      create  config/environments/development.rb
      create  config/environments/production.rb
      create  config/environments/test.rb
      create  config/initializers
      create  config/initializers/assets.rb
      create  config/initializers/content_security_policy.rb
      create  config/initializers/cors.rb
      create  config/initializers/filter_parameter_logging.rb
      create  config/initializers/inflections.rb
      create  config/initializers/new_framework_defaults_7_0.rb
      create  config/initializers/permissions_policy.rb
      create  config/locales
      create  config/locales/en.yml
      create  config/master.key
      append  .gitignore
      create  config/boot.rb
      create  config/database.yml
      create  db
      create  db/seeds.rb
      create  lib
      create  lib/tasks
      create  lib/tasks/.keep
      create  lib/assets
      create  lib/assets/.keep
      create  log
      create  log/.keep
      create  public
      create  public/404.html
      create  public/422.html
      create  public/500.html
      create  public/apple-touch-icon-precomposed.png
      create  public/apple-touch-icon.png
      create  public/favicon.ico
      create  public/robots.txt
      create  tmp
      create  tmp/.keep
      create  tmp/pids
      create  tmp/pids/.keep
      create  tmp/cache
      create  tmp/cache/assets
      create  vendor
      create  vendor/.keep
      create  test/fixtures/files
      create  test/fixtures/files/.keep
      create  test/controllers
      create  test/controllers/.keep
      create  test/mailers
      create  test/mailers/.keep
      create  test/models
      create  test/models/.keep
      create  test/helpers
      create  test/helpers/.keep
      create  test/integration
      create  test/integration/.keep
      create  test/channels/application_cable/connection_test.rb
      create  test/test_helper.rb
      create  test/system
      create  test/system/.keep
      create  test/application_system_test_case.rb
      create  storage
      create  storage/.keep
      create  tmp/storage
      create  tmp/storage/.keep
      remove  app/assets/config/manifest.js
      remove  app/assets/config
      remove  app/assets/stylesheets/application.css
      create  app/assets/stylesheets/application.css
      remove  config/initializers/cors.rb
      remove  config/initializers/new_framework_defaults_7_0.rb
         run  bundle install
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Fetching rake 13.0.6
Installing rake 13.0.6
Fetching minitest 5.19.0
Fetching racc 1.7.1
Fetching rack 2.2.8
Fetching concurrent-ruby 1.2.2
Fetching builder 3.2.4
Fetching erubi 1.12.0
Fetching crass 1.0.6
Fetching nio4r 2.5.9
Installing erubi 1.12.0
Installing crass 1.0.6
Installing builder 3.2.4
Fetching websocket-extensions 0.1.5
Fetching marcel 1.0.2
Installing minitest 5.19.0
Installing racc 1.7.1 with native extensions
Fetching mini_mime 1.1.5
Installing nio4r 2.5.9 with native extensions
Installing rack 2.2.8
Using date 3.3.3
Fetching timeout 0.4.0
Installing concurrent-ruby 1.2.2
Installing websocket-extensions 0.1.5
Fetching public_suffix 5.0.3
Fetching bindex 0.8.1
Installing mini_mime 1.1.5
Installing marcel 1.0.2
Installing timeout 0.4.0
Fetching msgpack 1.7.2
Using bundler 2.4.12
Fetching matrix 0.4.2
Fetching regexp_parser 2.8.1
Fetching method_source 1.0.0
Installing bindex 0.8.1 with native extensions
Installing public_suffix 5.0.3
Fetching thor 1.2.2
Installing matrix 0.4.2
Fetching zeitwerk 2.6.11
Installing method_source 1.0.0
Using io-console 0.6.0
Fetching pg 1.5.3
Installing msgpack 1.7.2 with native extensions
Installing regexp_parser 2.8.1
Fetching rexml 3.2.6
Installing zeitwerk 2.6.11
Installing thor 1.2.2
Fetching rubyzip 2.3.2
Fetching websocket 1.2.9
Fetching websocket-driver 0.7.6
Installing rexml 3.2.6
Installing pg 1.5.3 with native extensions
Installing websocket 1.2.9
Installing websocket-driver 0.7.6 with native extensions
Installing rubyzip 2.3.2
Fetching rack-test 2.1.0
Using net-protocol 0.2.1
Fetching i18n 1.14.1
Fetching tzinfo 2.0.6
Fetching addressable 2.8.5
Installing rack-test 2.1.0
Fetching reline 0.3.7
Installing i18n 1.14.1
Fetching nokogiri 1.15.4 (arm64-darwin)
Fetching net-imap 0.3.7
Installing tzinfo 2.0.6
Fetching net-pop 0.1.2
Installing reline 0.3.7
Fetching net-smtp 0.3.3
Installing addressable 2.8.5
Fetching selenium-webdriver 4.10.0
Installing net-imap 0.3.7
Fetching activesupport 7.0.7
Installing net-pop 0.1.2
Fetching irb 1.7.4
Installing net-smtp 0.3.3
Fetching mail 2.8.1
Installing irb 1.7.4
Fetching debug 1.8.0
Fetching puma 5.6.6
Installing debug 1.8.0 with native extensions
Installing puma 5.6.6 with native extensions
Installing mail 2.8.1
Installing nokogiri 1.15.4 (arm64-darwin)
Fetching loofah 2.21.3
Fetching xpath 3.2.0
Installing xpath 3.2.0
Fetching capybara 3.39.2
Installing loofah 2.21.3
Fetching rails-html-sanitizer 1.6.0
Installing rails-html-sanitizer 1.6.0
Installing capybara 3.39.2
Installing selenium-webdriver 4.10.0
Fetching webdrivers 5.3.1
Installing webdrivers 5.3.1
Installing activesupport 7.0.7
Fetching bootsnap 1.16.0
Fetching globalid 1.1.0
Fetching rails-dom-testing 2.2.0
Fetching activemodel 7.0.7
Installing bootsnap 1.16.0 with native extensions
Installing rails-dom-testing 2.2.0
Installing globalid 1.1.0
Fetching activejob 7.0.7
Fetching actionview 7.0.7
Installing activemodel 7.0.7
Fetching activerecord 7.0.7
Installing activejob 7.0.7
Installing actionview 7.0.7
Fetching actionpack 7.0.7
Fetching jbuilder 2.11.5
Installing activerecord 7.0.7
Installing jbuilder 2.11.5
Installing actionpack 7.0.7
Fetching railties 7.0.7
Fetching actioncable 7.0.7
Fetching actionmailer 7.0.7
Fetching activestorage 7.0.7
Installing actionmailer 7.0.7
Installing actioncable 7.0.7
Installing activestorage 7.0.7
Installing railties 7.0.7
Fetching actionmailbox 7.0.7
Fetching actiontext 7.0.7
Fetching turbo-rails 1.4.0
Fetching cssbundling-rails 1.2.0
Fetching jsbundling-rails 1.1.2
Fetching propshaft 0.7.0
Fetching stimulus-rails 1.2.2
Installing actionmailbox 7.0.7
Fetching web-console 4.2.0
Installing actiontext 7.0.7
Installing cssbundling-rails 1.2.0
Fetching rails 7.0.7
Installing jsbundling-rails 1.1.2
Installing propshaft 0.7.0
Installing turbo-rails 1.4.0
Installing stimulus-rails 1.2.2
Installing web-console 4.2.0
Installing rails 7.0.7
Bundle complete! 16 Gemfile dependencies, 72 gems now installed.
Bundled gems are installed into \`./.bundle\`
         run  bundle binstubs bundler
       rails  javascript:install:esbuild
Compile into app/assets/builds
      create  app/assets/builds
      create  app/assets/builds/.keep
      append  .gitignore
      append  .gitignore
Add JavaScript include tag in application layout
      insert  app/views/layouts/application.html.erb
Create default entrypoint in app/javascript/application.js
      create  app/javascript
      create  app/javascript/application.js
Add default package.json
      create  package.json
Add default Procfile.dev
      create  Procfile.dev
Ensure foreman is installed
         run  gem install foreman from "."
Fetching foreman-0.87.2.gem
Successfully installed foreman-0.87.2
Parsing documentation for foreman-0.87.2
Installing ri documentation for foreman-0.87.2
Done installing documentation for foreman after 0 seconds
1 gem installed
Add bin/dev to start foreman
      create  bin/dev
Install esbuild
         run  yarn add esbuild from "."
yarn add v1.22.19
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
└─ esbuild@0.19.2
info All dependencies
├─ @esbuild/darwin-arm64@0.19.2
└─ esbuild@0.19.2
✨  Done in 2.87s.
Add build script
         run  npm pkg set scripts.build="esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=/assets" from "."
         run  yarn build from "."
yarn run v1.22.19
$ esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=/assets

  app/assets/builds/application.js      63b
  app/assets/builds/application.js.map  93b

✨  Done in 0.39s.
       rails  turbo:install stimulus:install
Import Turbo
      append  app/javascript/application.js
Install Turbo
         run  yarn add @hotwired/turbo-rails from "."
yarn add v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
└─ @hotwired/turbo-rails@7.3.0
info All dependencies
├─ @hotwired/turbo-rails@7.3.0
├─ @hotwired/turbo@7.3.0
└─ @rails/actioncable@7.0.7
✨  Done in 1.22s.
Run turbo:install:redis to switch on Redis and use it in development for turbo streams
Create controllers directory
      create  app/javascript/controllers
      create  app/javascript/controllers/index.js
      create  app/javascript/controllers/application.js
      create  app/javascript/controllers/hello_controller.js
Import Stimulus controllers
      append  app/javascript/application.js
Install Stimulus
         run  yarn add @hotwired/stimulus from "."
yarn add v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ @hotwired/stimulus@3.2.2
info All dependencies
└─ @hotwired/stimulus@3.2.2
✨  Done in 0.59s.
       rails  css:install:postcss
Build into app/assets/builds
       exist  app/assets/builds
   identical  app/assets/builds/.keep
File unchanged! Either the supplied flag value not found or the content has already been inserted!  .gitignore
File unchanged! Either the supplied flag value not found or the content has already been inserted!  .gitignore
Remove app/assets/stylesheets/application.css so build output can take over
      remove  app/assets/stylesheets/application.css
Add stylesheet link tag in application layout
File unchanged! Either the supplied flag value not found or the content has already been inserted!  app/views/layouts/application.html.erb
      append  Procfile.dev
Add bin/dev to start foreman
   identical  bin/dev
Install PostCSS w/ nesting and autoprefixer
      create  postcss.config.js
      create  app/assets/stylesheets/application.postcss.css
         run  yarn add postcss postcss-cli postcss-nesting autoprefixer from "."
yarn add v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 76 new dependencies.
info Direct dependencies
├─ autoprefixer@10.4.15
├─ postcss-cli@10.1.0
├─ postcss-nesting@12.0.1
└─ postcss@8.4.27
info All dependencies
├─ @csstools/selector-specificity@3.0.0
├─ @nodelib/fs.scandir@2.1.5
├─ @nodelib/fs.stat@2.0.5
├─ @nodelib/fs.walk@1.2.8
├─ ansi-regex@5.0.1
├─ ansi-styles@4.3.0
├─ anymatch@3.1.3
├─ autoprefixer@10.4.15
├─ binary-extensions@2.2.0
├─ braces@3.0.2
├─ browserslist@4.21.10
├─ caniuse-lite@1.0.30001520
├─ chokidar@3.5.3
├─ cliui@8.0.1
├─ color-convert@2.0.1
├─ color-name@1.1.4
├─ cssesc@3.0.0
├─ dependency-graph@0.11.0
├─ dir-glob@3.0.1
├─ electron-to-chromium@1.4.491
├─ emoji-regex@8.0.0
├─ fast-glob@3.3.1
├─ fastq@1.15.0
├─ fill-range@7.0.1
├─ fraction.js@4.2.0
├─ fs-extra@11.1.1
├─ fsevents@2.3.2
├─ get-caller-file@2.0.5
├─ get-stdin@9.0.0
├─ glob-parent@5.1.2
├─ globby@13.2.2
├─ graceful-fs@4.2.11
├─ ignore@5.2.4
├─ is-binary-path@2.1.0
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@3.0.0
├─ is-glob@4.0.3
├─ is-number@7.0.0
├─ jsonfile@6.1.0
├─ lilconfig@2.1.0
├─ merge2@1.4.1
├─ micromatch@4.0.5
├─ nanoid@3.3.6
├─ node-releases@2.0.13
├─ normalize-path@3.0.0
├─ normalize-range@0.1.2
├─ path-type@4.0.0
├─ picomatch@2.3.1
├─ pify@2.3.0
├─ postcss-cli@10.1.0
├─ postcss-load-config@4.0.1
├─ postcss-nesting@12.0.1
├─ postcss-reporter@7.0.5
├─ postcss-selector-parser@6.0.13
├─ postcss-value-parser@4.2.0
├─ postcss@8.4.27
├─ pretty-hrtime@1.0.3
├─ queue-microtask@1.2.3
├─ read-cache@1.0.0
├─ readdirp@3.6.0
├─ require-directory@2.1.1
├─ reusify@1.0.4
├─ run-parallel@1.2.0
├─ slash@5.1.0
├─ source-map-js@1.0.2
├─ string-width@4.2.3
├─ strip-ansi@6.0.1
├─ thenby@1.3.4
├─ to-regex-range@5.0.1
├─ update-browserslist-db@1.0.11
├─ util-deprecate@1.0.2
├─ wrap-ansi@7.0.0
├─ y18n@5.0.8
├─ yaml@2.3.1
├─ yargs-parser@21.1.1
└─ yargs@17.7.2
✨  Done in 3.45s.
Add build:css script
         run  npm pkg set scripts.build:css="postcss ./app/assets/stylesheets/application.postcss.css -o ./app/assets/builds/application.css" from "."
         run  yarn build:css from "."
yarn run v1.22.19
$ postcss ./app/assets/stylesheets/application.postcss.css -o ./app/assets/builds/application.css
✨  Done in 0.53s.
`;

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <pre className="ml-8 mt-8 text-gray-600">
          {railsNewOutput.trimStart()}
        </pre>
      </div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center md:block md:p-0">
          {/* This element is to trick the browser into centering the contents. */}
          <span
            className="hidden md:inline-block md:h-screen md:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 py-10 text-left align-bottom shadow-xl transition-all md:my-8 md:w-full md:max-w-2xl md:px-8 md:align-middle">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-200 shadow-md">
                <FontAwesomeIcon
                  icon={faCode}
                  className="h-10 w-10 text-blue-800"
                />
              </div>
              <div className="mt-8 text-center">
                <h1 className="font-serif text-3xl font-bold tracking-wide text-gray-900">
                  techiebabel.com
                </h1>
                <div className="mt-8 space-y-6">
                  <p className="text-gray-700">
                    Hi, I'm Alex, a software developer living in southeast
                    Michigan! You've reached my domain used for various hobby
                    projects.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      className="flex w-32 items-center rounded-lg bg-blue-200 px-4 py-2 text-blue-800 shadow-md transition duration-150 ease-in-out hover:bg-blue-300 hover:text-blue-900"
                      href="https://www.linkedin.com/in/wamonroe2/"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="h-8 w-8 flex-none"
                      />
                      <div className="ml-2 flex-1">LinkedIn</div>
                    </a>
                    <a
                      className="flex w-32 items-center rounded-lg bg-blue-200 px-4 py-2 text-blue-800 shadow-md transition duration-150 ease-in-out hover:bg-blue-300 hover:text-blue-900"
                      href="https://github.com/wamonroe"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="h-8 w-8 flex-none"
                      />
                      <div className="ml-2 flex-1">GitHub</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
