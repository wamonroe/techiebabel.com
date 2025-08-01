import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const railsNewOutput = `
❯ rails new project
      create  
      create  README.md
      create  Rakefile
      create  .ruby-version
      create  config.ru
      create  .gitignore
      create  .gitattributes
      create  Gemfile
         run  git init from "."
Initialized empty Git repository in /Users/alex/projects/project/.git/
      create  app
      create  app/assets/stylesheets/application.css
      create  app/controllers/application_controller.rb
      create  app/helpers/application_helper.rb
      create  app/jobs/application_job.rb
      create  app/mailers/application_mailer.rb
      create  app/models/application_record.rb
      create  app/views/layouts/application.html.erb
      create  app/views/layouts/mailer.html.erb
      create  app/views/layouts/mailer.text.erb
      create  app/views/pwa/manifest.json.erb
      create  app/views/pwa/service-worker.js
      create  app/assets/images
      create  app/assets/images/.keep
      create  app/controllers/concerns/.keep
      create  app/models/concerns/.keep
      create  bin
      create  bin/brakeman
      create  bin/dev
      create  bin/rails
      create  bin/rake
      create  bin/rubocop
      create  bin/setup
      create  bin/thrust
      create  Dockerfile
      create  .dockerignore
      create  bin/docker-entrypoint
      create  .rubocop.yml
      create  .github/workflows
      create  .github/workflows/ci.yml
      create  .github/dependabot.yml
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
      create  config/initializers/new_framework_defaults_8_0.rb
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
      create  log
      create  log/.keep
      create  public
      create  public/400.html
      create  public/404.html
      create  public/406-unsupported-browser.html
      create  public/422.html
      create  public/500.html
      create  public/icon.png
      create  public/icon.svg
      create  public/robots.txt
      create  script
      create  script/.keep
      create  tmp
      create  tmp/.keep
      create  tmp/pids
      create  tmp/pids/.keep
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
      create  test/test_helper.rb
      create  test/system
      create  test/system/.keep
      create  test/application_system_test_case.rb
      create  storage
      create  storage/.keep
      create  tmp/storage
      create  tmp/storage/.keep
      remove  config/initializers/cors.rb
      remove  config/initializers/new_framework_defaults_8_0.rb
         run  bundle install --quiet
         run  bundle lock --add-platform=x86_64-linux
Writing lockfile to /Users/alex/projects/project/Gemfile.lock
         run  bundle lock --add-platform=aarch64-linux
Writing lockfile to /Users/alex/projects/project/Gemfile.lock
         run  bundle binstubs bundler
       rails  importmap:install
       apply  /Users/alex/projects/.devbox/virtenv/ruby/gems/importmap-rails-2.2.2/lib/install/install.rb
  Add Importmap include tags in application layout
      insert    app/views/layouts/application.html.erb
  Create application.js module as entrypoint
      create    app/javascript/application.js
  Use vendor/javascript for downloaded pins
      create    vendor/javascript
      create    vendor/javascript/.keep
  Configure importmap paths in config/importmap.rb
      create    config/importmap.rb
  Copying binstub
      create    bin/importmap
         run  bundle install --quiet
       rails  turbo:install stimulus:install
       apply  /Users/alex/projects/.devbox/virtenv/ruby/gems/turbo-rails-2.0.16/lib/install/turbo_with_importmap.rb
  Import Turbo
      append    app/javascript/application.js
  Pin Turbo
      append    config/importmap.rb
         run  bundle install --quiet
       apply  /Users/alex/projects/.devbox/virtenv/ruby/gems/stimulus-rails-1.3.4/lib/install/stimulus_with_importmap.rb
  Create controllers directory
      create    app/javascript/controllers
      create    app/javascript/controllers/index.js
      create    app/javascript/controllers/application.js
      create    app/javascript/controllers/hello_controller.js
  Import Stimulus controllers
      append    app/javascript/application.js
  Pin Stimulus
  Appending: pin "@hotwired/stimulus", to: "stimulus.min.js"
      append    config/importmap.rb
  Appending: pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
      append    config/importmap.rb
  Pin all controllers
  Appending: pin_all_from "app/javascript/controllers", under: "controllers"
      append    config/importmap.rb
         run  bundle install --quiet
         run  bundle binstubs kamal
         run  bundle exec kamal init
Created configuration file in config/deploy.yml
Created .kamal/secrets file
Created sample hooks in .kamal/hooks
       force  .kamal/secrets
       force  config/deploy.yml
       rails  solid_cache:install solid_queue:install solid_cable:install
      create  config/cache.yml
      create  db/cache_schema.rb
        gsub  config/environments/production.rb
      create  config/queue.yml
      create  config/recurring.yml
      create  db/queue_schema.rb
      create  bin/jobs
        gsub  config/environments/production.rb
      create  db/cable_schema.rb
       force  config/cable.yml
`;

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <pre className="ml-8 mt-8 text-gray-600">{railsNewOutput.trimStart()}</pre>
      </div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center md:block md:p-0">
          {/* This element is to trick the browser into centering the contents. */}
          <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 py-10 text-left align-bottom shadow-xl transition-all md:my-8 md:w-full md:max-w-2xl md:px-8 md:align-middle">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-200 shadow-md">
                <FontAwesomeIcon icon={faCode} size="2x" className="text-blue-800" />
              </div>
              <div className="mt-8 text-center">
                <h1 className="font-serif text-3xl font-bold tracking-wide text-gray-900">
                  techiebabel.com
                </h1>
                <div className="mt-8 space-y-6">
                  <p className="text-gray-700">
                    Hi, I&apos;m Alex, a software developer living in southeast Michigan!
                    You&apos;ve reached my domain used for various hobby projects.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      className="flex w-32 items-center rounded-lg bg-blue-200 px-4 py-2 text-blue-800 shadow-md transition duration-150 ease-in-out hover:bg-blue-300 hover:text-blue-900"
                      href="https://www.linkedin.com/in/wamonroe2/"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 flex-none" />
                      <div className="ml-2 flex-1">LinkedIn</div>
                    </a>
                    <a
                      className="flex w-32 items-center rounded-lg bg-blue-200 px-4 py-2 text-blue-800 shadow-md transition duration-150 ease-in-out hover:bg-blue-300 hover:text-blue-900"
                      href="https://github.com/wamonroe"
                    >
                      <FontAwesomeIcon icon={faGithub} className="h-8 w-8 flex-none" />
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
